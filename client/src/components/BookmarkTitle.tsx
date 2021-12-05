import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { COLORS, SIZE } from "../constants";
import { useQuery } from "@apollo/client";
import { GET_BOOKMARK_COUNT } from "../graphql";
import { Loading } from "./Loading";
import { Error } from "./Error";


export const BookmarkTitle = () => {
    const {data, loading, error} = useQuery(GET_BOOKMARK_COUNT);

    if (loading) return <Loading/>;
    if (error) return <Error error={error}/>;
    
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Bookmark</Text>
            <View style={styles.counter}>
                <Text style={styles.textCounter}>{data.bookmarkCounter}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: SIZE.large,
        marginTop: SIZE.xxl,
        marginBottom: SIZE.sm
    },
    text: {
        color: COLORS.black,
        fontSize: 24,
        fontWeight: "bold"
    },
    counter: {
        marginHorizontal: 10,
        justifyContent: "center",
        alignItems: "center",
        height: 24,
        width: 24,
        borderRadius: 50,
        backgroundColor: COLORS.green
    },
    textCounter: {
        fontSize: 11,
        color: COLORS.light
    }
});
