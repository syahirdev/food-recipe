import React from "react";
import { FlatList, Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { data } from "../assets/data";
import { CategoryCard } from "../components/CategoryCard";
import images from "../assets/images";
// @ts-ignore
import Icon from "react-native-vector-icons/Feather";
import { TrendingCard } from "../components/TrendingCard";

export const Home = ({navigation}: any) => {

    const HeaderSection = () => {
        return (
            <View style={styles.header}>
                {/*Header*/}
                <View style={{flex: 1}}>
                    <Text style={styles.headerTitle}>Hello, Syahir!</Text>
                    <Text style={styles.headerSubtitle}>What you want to cook today?</Text>
                </View>
                {/*Profile Picture*/}
                {/*TODO: navigate to profile page*/}
                <TouchableOpacity onPress={() => {
                    console.log("TODO: navigate to profile page");
                }}>
                    <Image style={styles.profileImg} source={images.profile}/>
                </TouchableOpacity>
            </View>
        );
    };

    const SearchSection = () => {
        return (
            <View style={styles.search}>
                <Icon name={"search"} size={20}/>
                <TextInput
                    style={styles.searchInput}
                    placeholder={"Search Recipes"}
                    placeholderTextColor={"gray"}
                />
            </View>
        );
    };

    const RecipeSection = () => {
        return (
            <View style={styles.recipe}>
                <Image
                    source={images.recipe}
                    style={styles.recipeImg}
                />
                <View style={styles.recipeBody}>
                    <Text style={styles.recipeText}>You have 12 recipes that you haven't tried yet!</Text>
                    {/*TODO: navigate to list of recipes page*/}
                    <TouchableOpacity
                        onPress={() => console.log("TODO: navigate to list of recipes page")}
                        style={styles.recipeLink}>
                        <Icon name={"arrow-right-circle"} size={17} color={"#49b180"}/>
                        <Text style={styles.recipeLinkText}>See Recipes!</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    };

    const TrendingSection = () => {
        return (
            <View style={styles.trending}>
                <Text style={styles.trendingTitle}>Trending Recipe</Text>
                <FlatList
                    data={data}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item => `${item.id}`}
                    renderItem={({item}) => (
                        // TODO: navigate to trending recipe page
                        <TrendingCard
                            item={item}
                            onPress={() => console.log("TODO: navigate to trending recipe page")}
                        />
                    )}
                />
            </View>
        );
    };

    const CategorySection = () => {
        return (
            <View style={styles.category}>
                <Text style={styles.categoryText}>Category</Text>
                <TouchableOpacity>
                    <Text style={styles.viewAllText}>View All</Text>
                </TouchableOpacity>
            </View>
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={data}
                keyExtractor={item => `${item.id}`}
                ListHeaderComponent={
                    <>
                        <HeaderSection/>
                        <SearchSection/>
                        <RecipeSection/>
                        <TrendingSection/>
                        <CategorySection/>
                    </>
                }
                renderItem={({item}) => (
                    <CategoryCard
                        item={item}
                        onPress={() => navigation.navigate("Recipe", {recipe: item})}
                    />
                )}
                ListFooterComponent={
                    <View style={styles.footer}/>
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
    header: {
        flexDirection: "row",
        alignItems: "center",
        height: 80
    },
    headerTitle: {
        color: "#49b180",
        fontSize: 24,
        fontWeight: "bold"
    },
    headerSubtitle: {
        color: "gray",
        fontSize: 16
    },
    profileImg: {
        width: 40,
        height: 40,
        borderRadius: 40 / 2
    },
    search: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#e9e9e9",
        borderRadius: 50,
        paddingHorizontal: 20
    },
    searchInput: {
        marginLeft: 10
    },
    recipe: {
        flexDirection: "row",
        marginTop: 10,
        backgroundColor: "#e0f3e0",
        borderColor: "#cde9cd",
        borderWidth: 1,
        borderRadius: 10,
        paddingTop: 10,
        paddingHorizontal: 10
    },
    recipeImg: {
        width: 80,
        height: 80
    },
    recipeBody: {
        flex: 1,
        paddingLeft: 10,
        justifyContent: "space-between"
    },
    recipeText: {
        color: "#212121",
        fontSize: 14,
        fontWeight: "700"
    },
    recipeLink: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10
    },
    recipeLinkText: {
        marginLeft: 5,
        color: "#49b180",
        fontWeight: "500"
    },
    trending: {
        marginTop: 20
    },
    trendingTitle: {
        color: "black",
        fontSize: 20,
        fontWeight: "500"
    },
    category: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 20
    },
    categoryText: {
        flex: 1,
        fontSize: 20,
        fontWeight: "500",
        color: "black"
    },
    viewAllText: {
        marginRight: 5
    },
    footer: {
        marginBottom: 10
    }
});
