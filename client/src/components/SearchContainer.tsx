import React, { useState } from "react";
// @ts-ignore
import Icon from "react-native-vector-icons/Feather";
import { StyleSheet, TextInput, View } from "react-native";
import { COLORS, SIZE } from "../constants";

export const SearchContainer = ({HandleSearch}: any) => {
    const [searchText, setSearchText] = useState("");

    return (
        <View style={styles.search}>
            <Icon name={"search"} size={20}/>
            <TextInput
                style={styles.searchInput}
                placeholder={"Search Recipes"}
                placeholderTextColor={"gray"}
                value={searchText}
                onChangeText={(e) => {
                    HandleSearch(e);
                    setSearchText(e);
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    search: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: COLORS.light,
        borderRadius: 50,
        paddingHorizontal: SIZE.large,
        marginHorizontal: SIZE.large,
        marginVertical: SIZE.xl,

        //  box-shadow
        elevation: 20,
        shadowColor: COLORS.gray,
        shadowOffset: {width: -5, height: 10},
        shadowOpacity: .5,
        shadowRadius: 3
    },
    searchInput: {
        marginLeft: 10
    }
});
