import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS, SIZE } from "../constants";
// @ts-ignore
import Icon from "react-native-vector-icons/Feather";

export const AddIngredientButton = ({onPress}: any) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <View style={styles.wrapper}>
                <Icon name={"plus"} style={styles.icon}/>
                <Text style={styles.text}>Add Ingredient</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: SIZE.md,
        marginBottom: SIZE.large,
        flexDirection: "row"
    },
    wrapper: {
        backgroundColor: "#e0f3e0",
        borderColor: "#cde9cd",
        borderWidth: 1,
        alignItems: "center",
        flexDirection: "row",
        padding: SIZE.md,
        borderRadius: SIZE.md
    },
    icon: {
        color: COLORS.green
    },
    text: {
        color: COLORS.green,
        marginHorizontal: SIZE.lg,
        fontWeight: "bold"
    }
});
