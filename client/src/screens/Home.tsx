import React from "react";
import { FlatList, SafeAreaView, StyleSheet, View } from "react-native";
import { CategoryCard } from "../components/CategoryCard";
// @ts-ignore
import Icon from "react-native-vector-icons/Feather";
import { HeaderContainer } from "../components/HeaderContainer";
import { useQuery } from "@apollo/client";
import { Loading } from "../components/Loading";
import { Error } from "../components/Error";
import { GET_ALL_RECIPES } from "../graphql";
import { RecipeNotTriedContainer } from "../components/RecipeNotTriedContainer";
import { TrendingContainer } from "../components/TrendingContainer";
import { CategoryContainer } from "../components/CategoryContainer";

export const Home = ({navigation}: any) => {
    const {data, loading, error} = useQuery(GET_ALL_RECIPES, {
        fetchPolicy: "cache-and-network"
    });

    if (loading) return <Loading/>;
    if (error) return <Error error={error}/>;

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={data.recipes}
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
