import React from "react";
import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { data } from "../assets/data";
import { CategoryCard } from "../components/CategoryCard";
import images from "../assets/images";

export const Home = ({navigation}: any) => {

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={data}
                keyExtractor={item => `${item.id}`}
                ListHeaderComponent={
                    <View style={styles.header}>
                        {/*Header*/}
                        <View style={{flex: 1}}>
                            <Text style={styles.headerTitle}>Hello, Syahir!</Text>
                            <Text style={styles.headerSubtitle}>What you want to cook today?</Text>
                        </View>
                        {/*Profile Picture*/}
                        <TouchableOpacity onPress={() => {
                            //TODO: navigate to profile page
                            console.log("Profile");
                        }}>
                            <Image style={styles.profileImg} source={images.profile}/>
                        </TouchableOpacity>
                    </View>
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
        color: "#52b788",
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
    itemText: {
        color: "red"
    },
    footer: {
        marginBottom: 100
    }
});
