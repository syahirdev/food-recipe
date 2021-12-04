import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { COLORS, SIZE } from "../constants";
// @ts-ignore
import Icon from "react-native-vector-icons/Feather";
import { IngredientContainer } from "../components/IngredientContainer";
import { AddIngredientButton } from "../components/AddIngredientButton";
import { RecipeMedia } from "../components/RecipeMedia";
import { launchImageLibrary } from "react-native-image-picker";

interface ingredientListProps {
    name: string,
    amount: string
}

export const AddRecipe = ({navigation}: any) => {
    const [title, setTitle] = useState<string>("");
    const [ingredientList, setIngredientList] = useState<Array<ingredientListProps>>([
        {name: "", amount: ""}
    ]);
    const [document, setDocument] = useState();

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
        launchImageLibrary(options, (response) => {
            console.log("Response = ", response);

            if (response.didCancel) {
                console.log("User cancelled image picker");
            } else if (response.errorMessage) {
                console.log("ImagePicker Error: ", response.errorMessage);
            } else {
                setDocument(response.assets[0]);
            }
        });
    };

    const HandleCancel = () => {
        setDocument(undefined);
    };

    const HandleSubmit = () => {
        console.log(title);
        console.log(ingredientList);
        console.log(document);
    };

    return (
        <ScrollView style={styles.container}>
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
    subContainer: {
        marginHorizontal: SIZE.large,
        marginVertical: SIZE.md
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
    }
});
