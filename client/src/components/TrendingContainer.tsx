import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { data } from "../assets/data";
import { TrendingCard } from "./TrendingCard";

export const TrendingContainer = ({navigation}: any) => {
    return (
        <View style={styles.trending}>
            <Text style={styles.trendingTitle}>Trending Recipe</Text>
            <FlatList
                data={data}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => `${item.id}`}
                renderItem={({item}) => (
                    <TrendingCard
                        item={item}
                        onPress={() => navigation.navigate("Recipe", {recipe: item})}
                    />
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    trending: {
        marginTop: 20
    },
    trendingTitle: {
        color: "black",
        fontSize: 20,
        fontWeight: "500"
    }
});
