import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { SearchContainer } from "../components/SearchContainer";
import { CategoryCard } from "../components/CategoryCard";
import { SIZE } from "../constants";
import { useQuery } from "@apollo/client";
import { GET_ALL_RECIPES } from "../graphql";
import { Loading } from "../components/Loading";
import { Error } from "../components/Error";

export const Search = ({navigation}: any) => {
    const {data, loading, error} = useQuery(GET_ALL_RECIPES);
    const [itemList, setItemList] = useState(data.recipes.data);
    const [filteredItemList, setFilteredItemList] = useState(null);

    const HandleSearch = (e: string) => {
        const filteredData = itemList.filter(item => item.attributes.name.toLowerCase().indexOf(e.toLowerCase()) !== -1);
        if (filteredData) { // @ts-ignore
            setFilteredItemList(filteredData);
        }
    };

    if (loading) return <Loading/>;
    if (error) return <Error error={error}/>;

    return (
        <View style={styles.container}>
            <SearchContainer HandleSearch={HandleSearch}/>
            <FlatList
                data={filteredItemList ? filteredItemList : itemList}
                keyExtractor={item => `${item.id}`}
                renderItem={({item}) => (
                    <CategoryCard
                        item={item.attributes}
                        onPress={() => navigation.navigate("Recipe", {recipe: item.attributes})}
                    />
                )}
                ListFooterComponent={
                    <View style={{marginBottom: 50}}/>
                }
                keyboardDismissMode={"on-drag"}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: SIZE.sm
    }
});
