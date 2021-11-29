import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SIZE } from "../constants";

export const CategoryContainer = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.categoryText}>Category</Text>
            <TouchableOpacity>
                <Text style={styles.viewAllText}>View All</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 20,
        marginHorizontal: SIZE.large
    },
    categoryText: {
        flex: 1,
        fontSize: 20,
        fontWeight: "500",
        color: "black"
    },
    viewAllText: {
        marginRight: 5
    }
});
