import React from "react";
import { ImageBackground, StatusBar, StyleSheet, Text, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { Button } from "../components/Button";

export const Login = ({navigation}: any) => {

    return (
        <View style={styles.container}>
            <StatusBar barStyle={"light-content"}/>

            {/*Header*/}
            <View style={styles.header}>
                <ImageBackground
                    source={require("../assets/nasi-lemak.jpg")}
                    style={styles.backgroundImage}
                    resizeMode={"cover"}
                >
                    <LinearGradient
                        colors={["transparent", "black"]}
                        start={{x: 0, y: 0}}
                        end={{x: 0, y: 1}}
                        style={styles.linearGradient}
                    >
                        <Text style={styles.headerText}>Cooking a Delicious Food Easily</Text>
                    </LinearGradient>
                </ImageBackground>
            </View>

            {/*Body*/}
            <View style={styles.body}>
                <Text style={styles.bodyText}>
                    Discover more than 1200 food recipes in your hand
                    and cooking it easily!
                </Text>
                <View style={styles.buttonContainer}>
                    <Button
                        text={"Login"}
                        colors={["#52b788", "#86ecad"]}
                        onPress={() => navigation.replace("Home")}
                    />
                    <Button
                        text={"Sign Up"}
                        colors={["#52b788"]}
                        onPress={() => navigation.replace("Home")}
                    />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black"
    },
    header: {
        height: "65%",
        width: "100%"
    },
    headerText: {
        paddingLeft: 18,
        fontSize: 32,
        color: "white",
        width: "80%",
        fontWeight: "bold"
    },
    linearGradient: {
        height: 100
    },
    backgroundImage: {
        flex: 1,
        justifyContent: "flex-end"
    },
    body: {
        flex: 1,
        paddingHorizontal: 18
    },
    bodyText: {
        color: "#838383",
        width: "75%",
        fontSize: 18
    },
    buttonContainer: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 20
    }
});
