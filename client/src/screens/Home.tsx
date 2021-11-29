import React from "react";
import { FlatList, SafeAreaView, StyleSheet, View } from "react-native";
import { data } from "../assets/data";
import { CategoryCard } from "../components/CategoryCard";
// @ts-ignore
import Icon from "react-native-vector-icons/Feather";
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
                    <View style={{marginBottom: 50}}/>
                }
                keyboardDismissMode={"on-drag"}
                showsVerticalScrollIndicator={false}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
