import React from "react";
import { FlatList, View } from "react-native";
import { CategoryCard } from "../components/CategoryCard";
import { useQuery } from "@apollo/client";
import { GET_ALL_RECIPES } from "../graphql";
import { Loading } from "../components/Loading";
import { Error } from "../components/Error";
import { BookmarkTitle } from "../components/BookmarkTitle";

export const Bookmark = ({navigation}: any) => {
    const {data, loading, error} = useQuery(GET_ALL_RECIPES);

    if (loading) return <Loading/>;
    if (error) return <Error error={error}/>;

    return (
        <View>
            <BookmarkTitle/>
            <FlatList
                data={data.recipes}
                keyExtractor={item => `${item.id}`}
                renderItem={({item}) => {
                    return item.isBookmark ? (
                        <CategoryCard
                            item={item}
                            onPress={() => navigation.navigate("Recipe", {recipe: item})}
                        />
                    ) : null;
                }}
                ListFooterComponent={
                    <View style={{marginBottom: 50}}/>
                }
                keyboardDismissMode={"on-drag"}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};

