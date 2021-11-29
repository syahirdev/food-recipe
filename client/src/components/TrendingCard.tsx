import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
// @ts-ignore
import Icon from "react-native-vector-icons/FontAwesome";
import { COLORS, SIZE } from "../constants";

export const TrendingCard = ({item, onPress}: any) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Image
                resizeMode={"cover"}
                source={item.image}
                style={styles.image}/>

            <View style={styles.body}>
                <Text style={styles.bodyText}>{item.category}</Text>
            </View>

            <View style={styles.footer}>
                <View style={styles.footerWrapper}>
                    <Text style={styles.footerTitle}>{item.name}</Text>
                    <Icon
                        name={item.isBookmark ? "bookmark" : "bookmark-o"}
                        style={styles.bookmarkIcon}
                        size={20}
                        color={COLORS.green}/>
                </View>
                <Text style={styles.footerText}>{item.duration} | {item.serving} Serving</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 250,
        width: 200,
        marginTop: 15,
        marginRight: SIZE.md,
        borderRadius: 15,
        overflow: "hidden",
        position: "relative"
    },
    image: {
        height: 250,
        width: 200
    },
    body: {
        position: "absolute",
        top: 10,
        left: 8,
        backgroundColor: "rgba(0,0,0,0.5)",
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 50
    },
    bodyText: {
        color: COLORS.light,
        fontSize: 16
    },
    footer: {
        position: "absolute",
        bottom: 10,
        left: 10,
        right: 10,
        height: 100,
        backgroundColor: "rgba(31,31,31,0.8)",
        borderRadius: 15,
        padding: 10
    },
    footerWrapper: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    footerTitle: {
        color: COLORS.light,
        fontSize: 18,
        width: "80%"
    },
    bookmarkIcon: {
        marginTop: 5,
        marginRight: 3
    },
    footerText: {
        color: COLORS.light,
        fontSize: 12
    }
});
