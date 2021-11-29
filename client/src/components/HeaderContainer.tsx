import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import images from "../assets/images";

export const HeaderContainer = () => {
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

const styles = StyleSheet.create({
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
    }
});
