import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS, SIZE } from "../constants";
// @ts-ignore
import Icon from "react-native-vector-icons/Feather";
// @ts-ignore
import FAIcon from "react-native-vector-icons/FontAwesome";
import { RecipeServings } from "./RecipeServings";
import { env } from "../config";
import { BookmarkIcon } from "./BookmarkIcon";
import { useMutation } from "@apollo/client";
import { SET_BOOKMARK } from "../graphql";
import images from "../assets/images";

export const CategoryCard = ({item, onPress}: any) => {
    const [setBookmark] = useMutation(SET_BOOKMARK, {
        variables: {
            recipeId: item.id
        }
    });

    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            {/*Image*/}
            <Image
                source={item.image !== null ? {uri: env.BASE_URL + item.image.url} : images.defaultRecipe}
                resizeMode={"cover"}
                style={styles.image}
            />
            {/*Body*/}
            <View style={styles.body}>
                <Text style={styles.bodyText}>{item.name}</Text>
                <View style={{alignItems: "flex-start"}}>
                    <Text style={styles.categoryText}>{item.category.name}</Text>
                </View>
                <Text style={styles.bodyFooterText}>
                    <RecipeServings duration={item.duration} serving={item.serving}/>
                </Text>
            </View>
            <View style={styles.bookmark}>
                <BookmarkIcon
                    isBookmark={item.isBookmark}
                    onPress={async () => {
                        await setBookmark();
                    }}/>
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
        backgroundColor: COLORS.light,
        marginHorizontal: SIZE.large,

        //  box-shadow
        elevation: 10,
        shadowColor: COLORS.lightGray,
        shadowOffset: {width: -5, height: 5},
        shadowOpacity: .5,
        shadowRadius: 2
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 15
    },
    body: {
        width: "60%",
        paddingHorizontal: 20
    },
    bodyText: {
        flex: 1,
        fontSize: 20,
        fontWeight: "bold",
        color: "black"
    },
    categoryText: {
        paddingVertical: SIZE.sm,
        paddingHorizontal: SIZE.md,
        marginVertical: SIZE.sm,
        color: COLORS.light,
        backgroundColor: COLORS.green,
        fontSize: SIZE.h5,
        fontWeight: "500",
        borderRadius: 50
    },
    bodyFooterText: {
        fontSize: 14,
        color: COLORS.gray
    },
    bookmark: {
        alignSelf: "flex-start",
        right: -15,
        top: 5
    }
});
