import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const Error = ({error}: any) => {
    return (
        <View style={styles.container}>
            <Text style={styles.errorMessage}>{error.message}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    errorMessage: {
        fontWeight: "bold",
        color: "red",
        textAlign: "center"
    }
});
