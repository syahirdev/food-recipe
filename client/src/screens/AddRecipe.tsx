import React, { useEffect, useState } from "react";
import { Alert, Modal, Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { COLORS, SIZE } from "../constants";
// @ts-ignore
import Icon from "react-native-vector-icons/Feather";
// @ts-ignore
import FAIcon from "react-native-vector-icons/FontAwesome";
import { IngredientContainer } from "../components/IngredientContainer";
import { AddIngredientButton } from "../components/AddIngredientButton";
import { RecipeMedia } from "../components/RecipeMedia";
import { launchImageLibrary } from "react-native-image-picker";
import { CREATE_INGREDIENT, CREATE_RECIPE, GET_CATEGORIES, UPLOAD_IMAGE } from "../graphql";
import { useMutation, useQuery } from "@apollo/client";
import images from "../assets/images";
import { Loading } from "../components/Loading";
import { Error } from "../components/Error";
import { Dropdown } from "sharingan-rn-modal-dropdown";


interface ingredientListProps {
    name: string,
    amount: string
}

interface ListDropdownProps {
    value: number,
    label: string
}

export const AddRecipe = ({navigation}: any) => {
    const [errorText, setErrorText] = useState<string>("");
    const [modalVisible, setModalVisible] = useState<boolean>(false);
    const [title, setTitle] = useState<string>();
    const [duration, setDuration] = useState<string>();
    const [serving, setServing] = useState<string>();
    const [ingredientList, setIngredientList] = useState<Array<ingredientListProps>>([
        {name: "", amount: ""}
    ]);
    const [document, setDocument] = useState();


    //  react-native-modal-dropdown
    const [listDropdown, setListDropdown] = useState<Array<ListDropdownProps>>([]);
    const [valueDropdown, setValueDropdown] = useState("");
    const {data, loading, error} = useQuery(GET_CATEGORIES, {
        fetchPolicy: "cache-and-network"
    });

    useEffect(() => {
        data.categories.map((category: { id: number, name: string }) => {
            console.log(listDropdown, category.id, category.name);
            setListDropdown(listDropdown => [...listDropdown, {"value": category.id, "label": category.name}]);
        });
    }, [data]);

    const [createIngredient] = useMutation(CREATE_INGREDIENT);
    const [createRecipe] = useMutation(CREATE_RECIPE, {
        update(cache, {data}) {
            // const { recipe } = data.createRecipe;
            //
            // const recipes = cache.readQuery({
            //     query: GET_ALL_RECIPES,
            // })
            //
            // cache.writeQuery({
            //     query: GET_ALL_RECIPES,
            //     data: {
            //         recipes: [recipes]
            //     }
            // })
        }
    });
    const [upload] = useMutation(UPLOAD_IMAGE);

    const HandleChange = (name: string, value: string, index: number) => {
        const list = [...ingredientList];
        // @ts-ignore
        list[index][name] = value;
        setIngredientList(list);
    };

    const HandleRemove = (index: number) => {
        console.log("before", ingredientList);
        const list = [...ingredientList];
        list.splice(index, 1);
        setIngredientList(list);
        console.log("after", ingredientList);
    };

    const HandleAdd = () => {
        setIngredientList([...ingredientList, {name: "", amount: ""}]);
    };

    const HandleUpload = () => {
        const options = {
            mediaType: "photo",
            storageOptions: {
                skipBackup: true,
                path: "images"
            }
        };
        // @ts-ignore
        launchImageLibrary(options, (response) => {
            console.log("Response = ", response);

            if (response.didCancel) {
                console.log("User cancelled image picker");
            } else if (response.errorMessage) {
                console.log("ImagePicker Error: ", response.errorMessage);
            } else {
                // @ts-ignore
                setDocument(response.assets[0]);
            }
        });
    };

    const HandleCancel = () => {
        setDocument(undefined);
    };

    const HandleSubmit = async () => {
        let ingredientId: number[] = [];
        if (!title) {
            setErrorText("Title is required!");
            setModalVisible(true);
        } else if (!duration) {
            setErrorText("Duration is required!");
            setModalVisible(true);
        } else if (!serving) {
            setErrorText("Serving is required!");
            setModalVisible(true);
        } else {
            const requests = await ingredientList.map(async ingredient => {
                const ingredientData = await createIngredient({
                    variables: {
                        name: ingredient.name,
                        quantity: ingredient.amount
                    }
                });

                ingredientId.push(parseInt(ingredientData.data.createIngredient.ingredient.id));
                console.log(ingredientData.data.createIngredient.ingredient.id);
                console.log(ingredientId);
            });

            Promise.all(requests).then(async () => {
                const recipeData = await createRecipe({
                    variables: {
                        name: title,
                        duration: parseInt(duration),
                        serving: parseInt(serving),
                        category: valueDropdown,
                        ingredients: ingredientId,
                        author: 5
                    }
                });

                console.log(recipeData.data.createRecipe.recipe.id);
                navigation.navigate("Home");
            });
        }

        // const uploadData = await upload({
        //     variables: {
        //         refId: 3,
        //         ref: "recipe",
        //         field: "image",
        //         file: document
        //     }
        // });
        // console.log(uploadData);
    };

    const ModalView = ({text}: any) => {
        return (
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>{text || "Undefined"}</Text>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <View style={{
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "center"
                            }}>
                                <FAIcon name={"close"} style={{
                                    color: "white",
                                    marginRight: 5
                                }}/>
                                <Text style={styles.textStyle}>Close</Text>
                            </View>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        );
    };

    if (loading) return <Loading/>;
    if (error) return <Error error={error}/>;

    return (
        <ScrollView style={styles.container}>
            <ModalView text={error}/>
            <View style={styles.headerContainer}>
                <Text style={styles.header}>Add New Recipe</Text>
                <Text style={styles.subHeader}>Share your cooking recipe today!</Text>
            </View>

            <View style={styles.subContainer}>
                <Text style={styles.subtitle}>Title</Text>
                <TextInput
                    value={title}
                    onChangeText={(e: string) => setTitle(e)}
                    style={styles.titleInput}
                    placeholder={"Write a title"}/>
            </View>

            <View style={[styles.subContainer, styles.rowContainer]}>
                <View>
                    <Text style={styles.subtitle}>Duration</Text>
                    <View style={styles.subInputContainer}>
                        <TextInput
                            value={duration}
                            keyboardType="numeric"
                            onChangeText={(e: string) => {
                                const re = /^[0-9\b]+$/;
                                if (e === "" || re.test(e)) {
                                    setDuration(e);
                                }
                            }}
                            style={styles.subInput}/>
                        <Text style={{
                            marginHorizontal: SIZE.md,
                            color: duration ? COLORS.green : COLORS.lightGray
                        }}>mins</Text>
                    </View>
                </View>
                <View style={{marginHorizontal: SIZE.xxl}}>
                    <Text style={styles.subtitle}>Serving</Text>
                    <View style={styles.subInputContainer}>
                        <TextInput
                            value={serving}
                            keyboardType="numeric"
                            onChangeText={(e: string) => {
                                const re = /^[0-9\b]+$/;
                                if (e === "" || re.test(e)) {
                                    setServing(e);
                                }
                            }}
                            style={styles.subInput}/>
                        <Text style={{
                            marginHorizontal: SIZE.md,
                            color: serving ? COLORS.green : COLORS.lightGray
                        }}>servings</Text>
                    </View>
                </View>
            </View>

            <View style={styles.subContainer}>
                <Text style={styles.subtitle}>Category {valueDropdown}</Text>
                <View style={{marginTop: 10}}>
                    <Dropdown
                        data={listDropdown}
                        value={valueDropdown}
                        underlineColor="transparent"
                        onChange={(e) => setValueDropdown(e)}
                        primaryColor={COLORS.green}
                        label={""}/>
                </View>
            </View>

            <View style={styles.subContainer}>
                <Text style={styles.subtitle}>Ingredients</Text>
                {ingredientList.map((item, index) => {
                    return (
                        <IngredientContainer
                            key={index}
                            onChangeText={HandleChange}
                            onPress={HandleRemove}
                            item={item}
                            index={index}
                        />
                    );
                })}
                <AddIngredientButton onPress={HandleAdd}/>

                <Text style={styles.subtitle}>Add Media</Text>
                <RecipeMedia onPress={HandleUpload} onPressCancel={HandleCancel} document={document}/>

                <TouchableOpacity style={styles.addButton} onPress={HandleSubmit}>
                    <Icon name={"plus"} style={styles.buttonText}/>
                    <Text style={styles.buttonText}>Add New Recipe!</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {},
    dropdown: {
        zIndex: 10,
        marginVertical: SIZE.md,
        backgroundColor: COLORS.light,
        borderRadius: SIZE.sm,
        padding: SIZE.md,

        //  box-shadow
        elevation: 3,
        shadowColor: COLORS.lightGray,
        shadowOffset: {width: -5, height: 10},
        shadowOpacity: .5,
        shadowRadius: 3
    },
    dropdownStyle: {
        paddingHorizontal: SIZE.md,
        borderRadius: SIZE.sm
    },
    subContainer: {
        marginHorizontal: SIZE.large,
        marginVertical: SIZE.md
    },
    rowContainer: {
        flexDirection: "row"
    },
    headerContainer: {
        marginHorizontal: SIZE.large,
        marginVertical: SIZE.xl
    },
    header: {
        color: COLORS.green,
        fontSize: 24,
        fontWeight: "bold"
    }, subHeader: {
        color: COLORS.lightGray,
        fontSize: 16
    },
    subtitle: {
        color: COLORS.black,
        fontSize: SIZE.h3
    },
    titleInput: {
        color: COLORS.green,
        fontSize: SIZE.h2
    },
    subInputContainer: {
        marginTop: SIZE.md,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    subInput: {
        fontSize: SIZE.h3,
        color: COLORS.green,
        backgroundColor: COLORS.lighterGreen,
        borderRadius: 10,
        paddingHorizontal: SIZE.xxl
        // marginTop: SIZE.md
    },
    mediaImg: {
        width: 50,
        height: 50
    },
    addButton: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.green,
        padding: 12,
        borderRadius: 10
    },
    buttonText: {
        marginHorizontal: 5,
        textAlign: "center",
        fontWeight: "500",
        color: COLORS.light
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 10,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 30,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 10,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF"
    },
    buttonClose: {
        backgroundColor: COLORS.red
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
});
