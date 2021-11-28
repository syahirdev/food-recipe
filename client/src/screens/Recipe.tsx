import React, { useEffect, useRef, useState } from "react";
import { Animated, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { IngredientCard } from "../components/IngredientCard";
// @ts-ignore
import FeatherIcon from "react-native-vector-icons/Feather";
// @ts-ignore
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

const initRecipe: RecipeProps = {
    image: "null",
    author: {
        profilePic: "",
        name: ""
    },
    isBookmark: false,
    ingredients: ""
};

interface RecipeProps {
    image: any,
    author: {
        profilePic: any,
        name: string,
    },
    isBookmark: boolean,
    ingredients: any,
}

export const Recipe = ({navigation, route}: any) => {
    const [selectedRecipe, setSelectedRecipe] = useState<RecipeProps>(initRecipe);
    const scrollY = useRef(new Animated.Value(0)).current;
    useEffect(() => {
        let {recipe} = route.params;
        setSelectedRecipe(recipe);
    }, []);

    const HeaderSection = () => {
        return (
            <View style={styles.headerContainer}>
                <Image
                    source={selectedRecipe?.image}
                    resizeMode={"contain"}
                    style={styles.headerImg}
                />

                <View style={styles.creatorContainer}>
                    <View style={styles.creatorWrapper}>
                        <Image
                            style={styles.creatorImg}
                            source={selectedRecipe?.author?.profilePic}
                        />
                    </View>

                    <View style={styles.labelContainer}>
                        <Text style={styles.labelTitle}>Recipe by:</Text>
                        <Text style={styles.labelName}>{selectedRecipe?.author?.name}</Text>
                    </View>

                    <TouchableOpacity style={styles.buttonContainer}>
                        <FeatherIcon name={"arrow-right"} color={"#7a7a7a"} size={15}/>
                    </TouchableOpacity>
                </View>
            </View>
        );
    };

    const ButtonHeaderSection = () => {
        return (
            <View style={styles.headerButtonContainer}>
                <TouchableOpacity
                    style={styles.headerBackButton}
                    onPress={() => navigation.goBack()}>
                    <FeatherIcon
                        name={"chevron-left"}
                        color={"rgba(165,165,165,0.7)"}
                        size={23}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <FontAwesomeIcon
                        name={selectedRecipe?.isBookmark ? "bookmark" : "bookmark-o"}
                        color={"#35ac72"}
                        size={30}/>
                </TouchableOpacity>
            </View>
        );
    };

    return (
        <View>
            <Animated.FlatList
                data={selectedRecipe?.ingredients}
                keyExtractor={item => `${item.id}`}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={
                    <>
                        <HeaderSection/>
                        <ButtonHeaderSection/>
                    </>
                }
                scrollEventThrottle={16}
                onScroll={Animated.event([
                    {nativeEvent: {contentOffset: {y: scrollY}}}
                ], {useNativeDriver: true})}
                renderItem={({item}) => (
                    <>
                        <IngredientCard item={item}/>
                    </>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    headerContainer: {
        alignItems: "center"
    },
    headerImg: {
        height: 300
    },
    creatorContainer: {
        position: "absolute",
        bottom: 20,
        left: 30,
        right: 30,
        height: 70,
        backgroundColor: "rgba(40,40,40,0.9)",
        borderRadius: 10,
        flexDirection: "row",
        paddingHorizontal: 15
    },
    creatorWrapper: {
        justifyContent: "center",
        alignItems: "center"
    },
    creatorImg: {
        height: 40,
        width: 40,
        borderRadius: 40 / 2
    },
    labelContainer: {
        justifyContent: "center",
        flex: 1,
        marginHorizontal: 20
    },
    labelTitle: {
        color: "#d9d9d9"
    },
    labelName: {
        color: "white",
        fontSize: 16,
        fontWeight: "500"
    },
    buttonContainer: {
        width: 30,
        height: 30,
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        borderColor: "#7a7a7a",
        borderWidth: 1,
        borderRadius: 5
    },
    headerButtonContainer: {
        position: "absolute",
        top: 20,
        left: 20,
        right: 20,
        height: 50,
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "space-between",
        paddingHorizontal: 10,
        paddingBottom: 10
    },
    headerBackButton: {
        backgroundColor: "rgba(29,29,29,0.8)",
        borderRadius: 50,
        borderWidth: 1,
        borderColor: "rgba(165,165,165,0.7)",
        padding: 3
    }
});
