import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";

export const Button = ({text, customStyle, colors, onPress}: any) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            {colors.length > 1 ?
                <LinearGradient
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 0}}
                    colors={colors}
                    style={[{...customStyle}, styles.buttonContainer]}
                >
                    <Text style={styles.buttonText}>{text}</Text>
                </LinearGradient> :
                <View style={[styles.buttonContainer, styles.buttonTransparentContainer, {borderColor: colors[0]}]}>
                    <Text style={styles.buttonText}>{text}</Text>
                </View>
            }
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 7
    },
    buttonContainer: {
        paddingVertical: 20,
        borderRadius: 18
    },
    buttonTransparentContainer: {
        borderWidth: 1
    },
    buttonText: {
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
        color: "white"
    }
});
