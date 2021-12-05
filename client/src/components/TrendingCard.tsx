import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
// @ts-ignore
import FAIcon from "react-native-vector-icons/FontAwesome";
// @ts-ignore
import Icon from "react-native-vector-icons/Feather";
import { COLORS, SIZE } from "../constants";
import { env } from "../config";
import { RecipeServings } from "./RecipeServings";
import { BookmarkIcon } from "./BookmarkIcon";
import { useMutation } from "@apollo/client";
import { SET_BOOKMARK } from "../graphql";
import images from "../assets/images";

export const TrendingCard = ({item, onPress}: any) => {
    const [setBookmark] = useMutation(SET_BOOKMARK, {
        variables: {
            recipeId: item.id
        }
    });

    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Image
                resizeMode={"cover"}
                source={item.image !== null ? {uri: env.BASE_URL + item.image.url} : images.defaultRecipe}
                style={styles.image}/>

            <View style={styles.body}>
                <Text style={styles.bodyText}>{item.category.name}</Text>
            </View>

            <View style={styles.footer}>
                <View style={styles.footerWrapper}>
                    <Text style={styles.footerTitle}>{item.name}</Text>
                    <BookmarkIcon
                        isBookmark={item.isBookmark}
                        style={styles.bookmarkIcon}
                        onPress={async () => {
                            await setBookmark();
                        }}/>
                </View>
                <Text style={styles.footerText}>
                    <RecipeServings duration={item.duration} serving={item.serving}/>
                </Text>
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
