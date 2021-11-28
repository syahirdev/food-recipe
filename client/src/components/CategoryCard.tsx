import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export const CategoryCard = ({item, onPress}: any) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            {/*Image*/}
            <Image
                source={item.image}
                resizeMode={"cover"}
                style={styles.image}
            />
            {/*Body*/}
            <View style={styles.body}>
                <Text style={styles.bodyText}>{item.name}</Text>
                <Text style={styles.bodyFooterText}>{item.duration} | {item.serving} Servings</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        marginTop: 10,
        borderRadius: 15,
        backgroundColor: "#e7e7e7"
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 15
    },
    body: {
        width: "70%",
        paddingHorizontal: 20
    },
    bodyText: {
        flex: 1,
        fontSize: 20,
        fontWeight: "bold",
        color: "black"
    },
    bodyFooterText: {
        fontSize: 14
    }
});
