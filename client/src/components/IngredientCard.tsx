import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export const IngredientCard = ({item}: any) => {
    return (
        <View style={styles.row}>
            <View style={styles.iconContainer}>
                <Image
                    source={item.icon}
                    style={styles.icon}
                />
            </View>
            <View style={styles.descContainer}>
                <Text style={styles.descText}>{item?.name}</Text>
            </View>
            <View style={styles.quantityContainer}>
                <Text>{item.quantity}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        paddingHorizontal: 30,
        marginVertical: 5,
        alignItems: "center"
    },
    iconContainer: {
        backgroundColor: "#e7e7e7",
        padding: 5,
        borderRadius: 10
    },
    icon: {
        height: 40,
        width: 40
    },
    descContainer: {
        flex: 1,
        paddingHorizontal: 10,
        justifyContent: "center"
    },
    descText: {
        fontSize: 16,
        fontWeight: "500"
    },
    quantityContainer: {
        alignItems: "flex-end",
        justifyContent: "center"
    }
});
