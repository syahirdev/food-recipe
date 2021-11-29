import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS, SIZE } from "../constants";
// @ts-ignore
import Icon from "react-native-vector-icons/Feather";
// @ts-ignore
import FAIcon from "react-native-vector-icons/FontAwesome";

export const CategoryCard = ({item, onPress}: any) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            {/*Image*/}
            <Image
                source={item.image}
                resizeMode={"cover"}
                style={styles.image}
            />
            {/*Body*/}
            <View style={styles.body}>
                <Text style={styles.bodyText}>{item.name}</Text>
                <Text style={styles.bodyFooterText}>
                    <Icon name={"clock"}/> {item.duration} | {item.serving} Servings <Icon name={"users"}/>
                </Text>
            </View>
            <View style={styles.bookmark}>
                <FAIcon name={item.isBookmark ? "bookmark" : "bookmark-o"} size={20} color={COLORS.green}/>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        marginTop: 10,
        borderRadius: 15,
        backgroundColor: COLORS.light,
        marginHorizontal: SIZE.large,

        //  box-shadow
        elevation: 10,
        shadowColor: COLORS.lightGray,
        shadowOffset: {width: -5, height: 5},
        shadowOpacity: .5,
        shadowRadius: 2
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 15
    },
    body: {
        width: "70%",
        paddingHorizontal: 20
    },
    bodyText: {
        flex: 1,
        fontSize: 20,
        fontWeight: "bold",
        color: "black"
    },
    bodyFooterText: {
        fontSize: 14,
        color: COLORS.gray
    },
    bookmark: {
        alignSelf: "flex-start",
        left: -15,
        top: 5
    }
});
