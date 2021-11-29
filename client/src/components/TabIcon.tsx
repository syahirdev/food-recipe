import React from "react";
import { StyleSheet, View } from "react-native";
// @ts-ignore
import Icon from "react-native-vector-icons/Feather";

interface Props {
    focused?: boolean,
    icon?: string
}

export const TabIcon = ({focused, icon}: Props) => {
    return (
        <View style={styles.container}>
            <Icon name={icon} size={focused ? 30 : 25} style={[styles.icon, focused && styles.iconActive]}/>
            {/*{focused && <View style={styles.borderActive}/>}*/}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: "relative",
        alignItems: "center",
        justifyContent: "center",
        height: 80,
        width: 50
    },
    icon: {
        color: "#40916c"
    },
    iconActive: {
        color: "#74c69d"
    },
    borderActive: {
        marginTop: 3,
        backgroundColor: "#74c69d",
        height: 2,
        width: 35,
        borderRadius: 100
    }
});
