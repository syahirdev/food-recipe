import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { COLORS, SIZE } from "../constants";
// @ts-ignore
import Icon from "react-native-vector-icons/Feather";
import { IngredientContainer } from "../components/IngredientContainer";
import { AddIngredientButton } from "../components/AddIngredientButton";
import { RecipeMedia } from "../components/RecipeMedia";

export const AddRecipe = ({navigation}: any) => {
    const [ingredientList, setIngredientList] = useState([
        {name: "", amount: ""},
        {name: "", amount: ""},
        {name: "", amount: ""}
    ]);

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

    return (
        <ScrollView style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.header}>Add New Recipe</Text>
                <Text style={styles.subHeader}>Share your cooking recipe today!</Text>
            </View>

            <View style={styles.subContainer}>
                <Text style={styles.subtitle}>Title</Text>
                <TextInput
                    style={styles.titleInput}
                    placeholder={"Write a title"}/>
            </View>

            <View style={styles.subContainer}>
                <Text style={styles.subtitle}>Ingredients</Text>
                {ingredientList.map((item, index) => {
                    return (
                        <IngredientContainer
                            onChangeText={HandleChange}
                            onPress={HandleRemove}
                            item={item}
                            index={index}
                        />
                    );
                })}
                <AddIngredientButton onPress={HandleAdd}/>

                <Text style={styles.subtitle}>Add Media</Text>
                <RecipeMedia/>
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
    }
});
