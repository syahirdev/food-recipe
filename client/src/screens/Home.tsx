import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

export const Home = ({navigation}: any) => {
    return (
        <View>
            <Text>Home</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Recipe")}>
                <Text>Navigate to Recipe Page</Text>
            </TouchableOpacity>
        </View>
    );
};
