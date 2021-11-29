import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { SIZE } from "../constants";
import { HeaderTitle } from "../components/HeaderTitle";
import { CategoryCard } from "../components/CategoryCard";
import { data } from "../assets/data";

export const Bookmark = ({navigation}: any) => {
    return (
        <View style={styles.container}>
            <HeaderTitle title={"Bookmark"}/>
            <FlatList
                data={data}
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

const styles = StyleSheet.create({
    container: {
        marginTop: SIZE.sm
    }
});
