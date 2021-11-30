import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { RecipeServings } from "./RecipeServings";
import { Viewers } from "./Viewers";

export const Community = ({item}: any) => {
    // console.log(item?.viewers?.data?.attributes?.image?.data?.attributes?.url);
    // console.log(item?.viewers?.data);

    return (
        <View style={styles.container}>
            {/*Left Container*/}
            <View style={styles.recipeContainer}>
                <Text style={styles.recipeTitle}>{item.name}</Text>
                <Text style={styles.recipeDesc}>
                    <RecipeServings duration={item.duration} serving={item.serving}/>
                </Text>
            </View>

            {/*Right Container*/}
            <View style={styles.viewerContainer}>
                <Viewers viewers={item?.viewers?.data}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1.5,
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 20,
        marginTop: 20
    },
    recipeContainer: {
        flex: 1.5
    },
    recipeTitle: {
        color: "black",
        fontSize: 18,
        width: "80%"
    },
    recipeDesc: {
        marginTop: 10
    },
    viewerContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center"
    },
    viewerImg: {
        height: 40,
        width: 40
    }
});
