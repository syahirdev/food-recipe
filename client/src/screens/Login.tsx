import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export const Login = ({navigation}: any) => {
    return (
        <View>
            <Text>Login</Text>
            <TouchableOpacity onPress={() => navigation.replace("Home")}>
                <Text>Navigate to Home</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});
