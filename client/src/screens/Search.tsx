import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { SearchContainer } from "../components/SearchContainer";
import { CategoryCard } from "../components/CategoryCard";
import { dummyData } from "../assets/dummyData";
import { SIZE } from "../constants";

export const Search = ({navigation}: any) => {
    const [itemList, setItemList] = useState(dummyData);
    const [filteredItemList, setFilteredItemList] = useState(null);

    const HandleSearch = (e: string) => {
        const filteredData = itemList.filter(item => item.name.toLowerCase().indexOf(e.toLowerCase()) !== -1);
        if (filteredData) { // @ts-ignore
            setFilteredItemList(filteredData);
        }
    };

    return (
        <View style={styles.container}>
            <SearchContainer HandleSearch={HandleSearch}/>
            <FlatList
                data={filteredItemList ? filteredItemList : itemList}
                keyExtractor={item => `${item.id}`}
                renderItem={({item}) => (
                    <CategoryCard
                        item={item}
                        onPress={() => navigation.navigate("Recipe", {recipe: item})}
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
