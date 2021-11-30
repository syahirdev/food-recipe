import React from "react";
import { FlatList, View } from "react-native";
import { HeaderTitle } from "../components/HeaderTitle";
import { CategoryCard } from "../components/CategoryCard";
import { useQuery } from "@apollo/client";
import { GET_ALL_RECIPES } from "../graphql";
import { Loading } from "../components/Loading";
import { Error } from "../components/Error";

export const Bookmark = ({navigation}: any) => {
    const {data, loading, error} = useQuery(GET_ALL_RECIPES);

    if (loading) return <Loading/>;
    if (error) return <Error error={error}/>;

    return (
        <View>
            <HeaderTitle title={"Bookmark"}/>
            <FlatList
                data={data.recipes.data}
                keyExtractor={item => `${item.id}`}
                renderItem={({item}) => {
                    if (item.attributes.isBookmark) return (
                        <CategoryCard
                            item={item.attributes}
                            onPress={() => navigation.navigate("Recipe", {recipe: item.attributes})}
                        />
                    );
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
