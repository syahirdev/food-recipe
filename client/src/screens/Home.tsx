import React from "react";
import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { data } from "../assets/data";
import { CategoryCard } from "../components/CategoryCard";
import images from "../assets/images";
// @ts-ignore
import Icon from "react-native-vector-icons/Feather";
import { SearchContainer } from "../components/SearchContainer";
import { HeaderContainer } from "../components/HeaderContainer";
import { TrendingContainer } from "../components/TrendingContainer";
import { RecipeNotTriedContainer } from "../components/RecipeNotTriedContainer";
import { CategoryContainer } from "../components/CategoryContainer";

export const Home = ({navigation}: any) => {

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={data}
                keyExtractor={item => `${item.id}`}
                ListHeaderComponent={
                    <>
                        <HeaderContainer/>
                        <SearchContainer/>
                        <RecipeNotTriedContainer/>
                        <TrendingContainer navigation={navigation}/>
                        <CategoryContainer/>
                    </>
                }
                renderItem={({item}) => (
                    <CategoryCard
                        item={item}
                        onPress={() => navigation.navigate("Recipe", {recipe: item})}
                    />
                )}
                ListFooterComponent={
                    <View style={{marginBottom: 10}}/>
                }
                keyboardDismissMode={"on-drag"}
                showsVerticalScrollIndicator={false}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 15,
        flex: 1
    },
});
