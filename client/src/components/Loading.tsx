import React from "react";
import { ActivityIndicator, StyleSheet } from "react-native";
import { COLORS } from "../constants";

export const Loading = () => {
    return (
        <ActivityIndicator style={styles.loading}/>
    );
};

const styles = StyleSheet.create({
    loading: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.light
    }
});
