import React from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import { COLORS, SIZE } from "../constants";
// @ts-ignore
import Icon from "react-native-vector-icons/Feather";
import LinearGradient from "react-native-linear-gradient";

export const RecipeMedia = ({onPress, onPressCancel, document}: any) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                colors={[COLORS.green, "#30bf6b"]}
                style={styles.mediaContainer}
            >
                {document ?
                    <>
                        <Image
                            style={styles.mediaImg}
                            source={{uri: document.uri}}
                        />
                        <TouchableOpacity style={styles.iconCrossContainer} onPress={onPressCancel}>
                            <Icon name={"x-circle"} size={30} style={styles.iconCross}/>
                        </TouchableOpacity>
                    </>
                    :
                    <>
                        <Icon name={"image"} size={25} style={styles.icon}/>
                        <Icon name={"plus"} size={15} style={[styles.icon, styles.iconLayer]}/>
                    </>
                }
            </LinearGradient>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: SIZE.md
    },
    mediaContainer: {
        height: 200,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        backgroundColor: COLORS.green,
        objectFit: "cover",
        overflow: "hidden",

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
    },
    mediaImg: {
        width: "100%",
        height: "100%"
    },
    iconCrossContainer: {
        position: "absolute",
        top: 10,
        right: 10
    },
    iconCross: {
        opacity: .5
    }
});
