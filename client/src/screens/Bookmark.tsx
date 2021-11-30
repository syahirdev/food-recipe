import React from "react";
import { FlatList, View } from "react-native";
import { HeaderTitle } from "../components/HeaderTitle";
import { CategoryCard } from "../components/CategoryCard";
import { dummyData } from "../assets/dummyData";

export const Bookmark = ({navigation}: any) => {
    return (
        <View>
            <HeaderTitle title={"Bookmark"}/>
            <FlatList
                data={dummyData}
                keyExtractor={item => `${item.id}`}
                renderItem={({item}) => {
                    if (item.isBookmark) return (
                        <CategoryCard
                            item={item}
                            onPress={() => navigation.navigate("Recipe", {recipe: item})}
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
