import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import images from "../assets/images";
import { COLORS, SIZE } from "../constants";

export const HeaderContainer = () => {
    return (
        <View style={styles.container}>
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
    container: {
        flexDirection: "row",
        alignItems: "center",
        height: 80,
        marginHorizontal: SIZE.large
    },
    headerTitle: {
        color: COLORS.green,
        fontSize: 24,
        fontWeight: "bold"
    },
    headerSubtitle: {
        color: COLORS.lightGray,
        fontSize: 16
    },
    profileImg: {
        width: 40,
        height: 40,
        borderRadius: 40 / 2
    }
});
