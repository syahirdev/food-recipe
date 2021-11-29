import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { COLORS, SIZE } from "../constants";
// @ts-ignore
import Icon from "react-native-vector-icons/Feather";
import LinearGradient from "react-native-linear-gradient";

export const RecipeMedia = () => {
    return (
        <TouchableOpacity style={styles.container}>
            <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                colors={[COLORS.green, "#30bf6b"]}
                style={styles.mediaContainer}
            >
                <Icon name={"image"} size={25} style={styles.icon}/>
                <Icon name={"plus"} size={15} style={[styles.icon, styles.iconLayer]}/>
            </LinearGradient>
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
        backgroundColor: COLORS.green,

        //  box-shadow
        elevation: 10,
        shadowColor: COLORS.lightGray,
        shadowOffset: {width: -5, height: 10},
        shadowOpacity: .5,
        shadowRadius: 3
    },
    icon: {
        color: COLORS.lighterGreen
    },
    iconLayer: {
        position: "absolute",
        paddingBottom: 27,
        paddingLeft: 27
    }
});
