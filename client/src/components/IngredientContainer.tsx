import React from "react";
// @ts-ignore
import Icon from "react-native-vector-icons/Feather";
// @ts-ignore
import EntIcon from "react-native-vector-icons/Entypo";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import { COLORS, SIZE } from "../constants";

export const IngredientContainer = ({onChangeText, onPress, item, index}: any) => {
    return (
        <View style={styles.container}>
            {/*Images*/}
            <Icon name={"image"} size={20} style={styles.img}/>
            <View style={styles.wrapper}>
                {/*Ingredient Name*/}
                <TextInput
                    style={styles.text}
                    onChangeText={(e) => onChangeText("name", e, index)}
                    value={item.name}
                    placeholder={"Name"}/>
                {/*Amount*/}
                <TextInput
                    style={styles.amount}
                    onChangeText={(e) => onChangeText("amount", e, index)}
                    value={item.amount}
                    placeholder={"e.g. 100g"}/>
            </View>
            <TouchableOpacity style={styles.cross} onPress={() => onPress(index)}>
                <Icon name={"x-circle"} style={styles.crossIcon} size={25}/>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.light,
        padding: SIZE.md,
        borderRadius: SIZE.md,
        flexDirection: "row",
        alignItems: "center",
        marginVertical: SIZE.md,

        //  box-shadow
        elevation: 7,
        shadowColor: COLORS.lightGray,
        shadowOffset: {width: -5, height: 1},
        shadowOpacity: .3,
        shadowRadius: 1
    },
    img: {
        backgroundColor: COLORS.light,
        padding: SIZE.lg,
        borderRadius: 10,
        marginLeft: SIZE.xs,

        //  box-shadow
        elevation: 20,
        shadowColor: COLORS.gray,
        shadowOffset: {width: -5, height: 10},
        shadowOpacity: .5,
        shadowRadius: 3
    },
    wrapper: {
        marginHorizontal: SIZE.large
    },
    text: {
        padding: 0,
        color: COLORS.black,
        fontSize: SIZE.xxl
    },
    amount: {
        padding: 0,
        color: COLORS.green
    },
    cross: {
        marginLeft: "auto",
        marginRight: SIZE.lg
    },
    crossIcon: {
        color: COLORS.lightRed,
        opacity: .5
    }
});
