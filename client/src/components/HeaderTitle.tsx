import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { COLORS, SIZE } from "../constants";
// @ts-ignore
import Icon from "react-native-vector-icons/Feather";

interface HeaderTitleProps {
    title: string
}

export const HeaderTitle = ({title}: HeaderTitleProps) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal: SIZE.large,
        marginTop: SIZE.xxl,
        marginBottom: SIZE.sm
    },
    text: {
        color: COLORS.black,
        fontSize: 24,
        fontWeight: "bold"
    }
});
