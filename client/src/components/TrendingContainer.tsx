import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { TrendingCard } from "./TrendingCard";
import { SIZE } from "../constants";
import { useQuery } from "@apollo/client";
import { GET_ALL_RECIPES } from "../graphql";
import { Loading } from "./Loading";
import { Error } from "./Error";

export const TrendingContainer = ({navigation}: any) => {
    const {data, loading, error} = useQuery(GET_ALL_RECIPES);

    if (loading) return <Loading/>;
    if (error) return <Error error={error}/>;

    return (
        <View style={styles.container}>
            <Text style={styles.trendingTitle}>Trending Recipe</Text>
            <FlatList
                data={data.recipes.data}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => `${item.id}`}
                renderItem={({item}) => (
                    <TrendingCard
                        item={item.attributes}
                        onPress={() => navigation.navigate("Recipe", {recipe: item.attributes})}
                    />
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 20
    },
    trendingTitle: {
        color: "black",
        fontSize: 20,
        fontWeight: "500",
        marginHorizontal: SIZE.large
    }
});
