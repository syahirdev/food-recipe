import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { COLORS, SIZE } from "../constants";
// @ts-ignore
import Icon from "react-native-vector-icons/Feather";
import LinearGradient from "react-native-linear-gradient";

export const AddIngredientButton = ({onPress}: any) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                colors={[COLORS.green, "#30bf6b"]}
                style={styles.wrapper}
            >
                <Icon name={"plus"} style={styles.icon}/>
                <Text style={styles.text}>Add Ingredient</Text>
            </LinearGradient>
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
        backgroundColor: COLORS.green,
        alignItems: "center",
        flexDirection: "row",
        padding: SIZE.md,
        borderRadius: SIZE.md,

        //  box-shadow
        elevation: 3,
        shadowColor: COLORS.lightGray,
        shadowOffset: {width: -5, height: 10},
        shadowOpacity: .5,
        shadowRadius: 3
    },
    icon: {
        color: COLORS.lighterGreen
    },
    text: {
        color: COLORS.lighterGreen,
        marginHorizontal: SIZE.sm,
        fontWeight: "bold"
    }
});
