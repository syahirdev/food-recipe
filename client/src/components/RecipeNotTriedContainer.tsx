import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import images from "../assets/images";
// @ts-ignore
import Icon from "react-native-vector-icons/Feather";

export const RecipeNotTriedContainer = () => {
    return (
        <View style={styles.recipe}>
            <Image
                source={images.recipe}
                style={styles.recipeImg}
            />
            <View style={styles.recipeBody}>
                <Text style={styles.recipeText}>You have 12 recipes that you haven't tried yet!</Text>
                {/*TODO: navigate to list of recipes page*/}
                <TouchableOpacity
                    onPress={() => console.log("TODO: navigate to list of recipes page")}
                    style={styles.recipeLink}>
                    <Icon name={"arrow-right-circle"} size={17} color={"#49b180"}/>
                    <Text style={styles.recipeLinkText}>See Recipes!</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    recipe: {
        flexDirection: "row",
        marginTop: 10,
        backgroundColor: "#e0f3e0",
        borderColor: "#cde9cd",
        borderWidth: 1,
        borderRadius: 10,
        paddingTop: 10,
        paddingHorizontal: 10
    },
    recipeImg: {
        width: 80,
        height: 80
    },
    recipeBody: {
        flex: 1,
        paddingLeft: 10,
        justifyContent: "space-between"
    },
    recipeText: {
        color: "#212121",
        fontSize: 14,
        fontWeight: "700"
    },
    recipeLink: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10
    },
    recipeLinkText: {
        marginLeft: 5,
        color: "#49b180",
        fontWeight: "500"
    }
});
