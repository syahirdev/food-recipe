import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
// @ts-ignore
import FeatherIcon from "react-native-vector-icons/Feather";
import { RecipeHeaderButton } from "./RecipeHeaderButton";
import { Loading } from "./Loading";
import { Error } from "./Error";
import { env } from "../config";
import images from "../assets/images";

export const RecipeHeader = ({navigation, item, loading, error}: any) => {

    if (loading) return <Loading/>;
    if (error) return <Error error={error}/>;

    return (
        <>
            <View style={styles.headerContainer}>
                <Image
                    source={item.image !== null ? {uri: env.BASE_URL + item.image.url} : images.defaultRecipe}
                    resizeMode={"cover"}
                    style={styles.headerImg}
                />

                <View style={styles.creatorContainer}>
                    <View style={styles.creatorWrapper}>
                        <Image
                            style={styles.creatorImg}
                            source={{uri: env.BASE_URL + item?.author?.image?.url}}
                        />
                    </View>

                    <View style={styles.labelContainer}>
                        <Text style={styles.labelTitle}>Recipe by:</Text>
                        <Text style={styles.labelName}>{item?.author?.name}</Text>
                    </View>

                    <TouchableOpacity style={styles.buttonContainer}>
                        <FeatherIcon name={"arrow-right"} color={"#7a7a7a"} size={15}/>
                    </TouchableOpacity>
                </View>
            </View>
            <RecipeHeaderButton navigation={navigation} item={item}/>
        </>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        alignItems: "center"
    },
    headerImg: {
        height: 300,
        width: "100%"
    },
    creatorContainer: {
        position: "absolute",
        bottom: 20,
        left: 30,
        right: 30,
        height: 70,
        backgroundColor: "rgba(40,40,40,0.9)",
        borderRadius: 10,
        flexDirection: "row",
        paddingHorizontal: 15
    },
    creatorWrapper: {
        justifyContent: "center",
        alignItems: "center"
    },
    creatorImg: {
        height: 40,
        width: 40,
        borderRadius: 40 / 2
    },
    labelContainer: {
        justifyContent: "center",
        flex: 1,
        marginHorizontal: 20
    },
    labelTitle: {
        color: "#d9d9d9"
    },
    labelName: {
        color: "white",
        fontSize: 16,
        fontWeight: "500"
    },
    buttonContainer: {
        width: 30,
        height: 30,
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        borderColor: "#7a7a7a",
        borderWidth: 1,
        borderRadius: 5
    }
});
