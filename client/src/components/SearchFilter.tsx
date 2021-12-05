import React from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useQuery } from "@apollo/client";
import { GET_CATEGORIES } from "../graphql";
import { Loading } from "./Loading";
import { Error } from "./Error";
import { COLORS, SIZE } from "../constants";

export const SearchFilter = ({onPress}: any) => {
    const {data, loading, error} = useQuery(GET_CATEGORIES, {
        fetchPolicy: "cache-and-network"
    });

    if (loading) return <Loading/>;
    if (error) return <Error error={error}/>;

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.category} onPress={() => onPress(null)}>
                <Text style={styles.categoryText}>ALL</Text>
            </TouchableOpacity>
            <FlatList
                data={data.categories}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => `${item.id}`}
                renderItem={({item}) => (
                    <TouchableOpacity style={styles.category} onPress={() => onPress(item.id)}>
                        <Text style={styles.categoryText}>{item.name}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginHorizontal: SIZE.large
    },
    category: {
        backgroundColor: COLORS.green,
        paddingVertical: SIZE.md,
        paddingHorizontal: SIZE.xl,
        marginHorizontal: SIZE.xs,
        borderRadius: 50
    },
    categoryText: {
        color: COLORS.light,
        fontWeight: "500"
    }
});
