import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { COLORS, SIZE } from "../constants";

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
        marginVertical: SIZE.xxl
    },
    text: {
        color: COLORS.black,
        fontSize: 18,
        fontWeight: "500"
    }
});
