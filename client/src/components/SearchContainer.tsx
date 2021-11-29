import React from "react";
// @ts-ignore
import Icon from "react-native-vector-icons/Feather";
import { StyleSheet, TextInput, View } from "react-native";

export const SearchContainer = () => {
    return (
        <View style={styles.search}>
            <Icon name={"search"} size={20}/>
            <TextInput
                style={styles.searchInput}
                placeholder={"Search Recipes"}
                placeholderTextColor={"gray"}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    search: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#e9e9e9",
        borderRadius: 50,
        paddingHorizontal: 20
    },
    searchInput: {
        marginLeft: 10
    }
});
