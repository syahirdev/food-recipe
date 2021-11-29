import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { COLORS, SIZE } from "../constants";
// @ts-ignore
import Icon from "react-native-vector-icons/Feather";

export const RecipeMedia = () => {
    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.mediaContainer}>
                <Icon name={"image"} size={25} style={styles.icon}/>
                <Icon name={"plus"} size={15} style={[styles.icon, styles.iconLayer]}/>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: SIZE.md
    },
    mediaContainer: {
        height: 100,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        backgroundColor: "#e0f3e0",
        borderColor: "#cde9cd",
        borderWidth: 1
    },
    icon: {
        color: COLORS.green
    },
    iconLayer: {
        position: "absolute",
        paddingBottom: 27,
        paddingLeft: 27
    }
});
