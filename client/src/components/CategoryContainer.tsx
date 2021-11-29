import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export const CategoryContainer = () => {
    return (
        <View style={styles.category}>
            <Text style={styles.categoryText}>Category</Text>
            <TouchableOpacity>
                <Text style={styles.viewAllText}>View All</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    category: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 20
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
