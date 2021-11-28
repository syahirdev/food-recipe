import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
// @ts-ignore
import FeatherIcon from "react-native-vector-icons/Feather";
// @ts-ignore
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

export const RecipeHeaderButton = ({navigation, item}: any) => {
    return (
        <View style={styles.headerButtonContainer}>
            <TouchableOpacity
                style={styles.headerBackButton}
                onPress={() => navigation.goBack()}>
                <FeatherIcon
                    name={"chevron-left"}
                    color={"rgba(165,165,165,0.7)"}
                    size={23}/>
            </TouchableOpacity>
            <TouchableOpacity>
                <FontAwesomeIcon
                    name={item?.isBookmark ? "bookmark" : "bookmark-o"}
                    color={"#40916c"}
                    size={30}/>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    headerButtonContainer: {
        position: "absolute",
        top: 20,
        left: 20,
        right: 20,
        height: 50,
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "space-between",
        paddingHorizontal: 10,
        paddingBottom: 10
    },
    headerBackButton: {
        backgroundColor: "rgba(29,29,29,0.8)",
        borderRadius: 50,
        borderWidth: 1,
        borderColor: "rgba(165,165,165,0.7)",
        padding: 3
    }
});
