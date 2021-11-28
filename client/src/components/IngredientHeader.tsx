import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const IngredientHeader = ({totalItem}: any) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Ingredients</Text>
            <Text style={styles.desc}>{totalItem} items</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        paddingHorizontal: 30,
        marginBottom: 10,
        marginTop: 20,
        alignItems: "center",
        justifyContent: "space-between"
    },
    text: {
        color: "black",
        fontSize: 16
    },
    desc: {
        fontSize: 12
    }
});
