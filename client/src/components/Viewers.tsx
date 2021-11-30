import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { env } from "../config";

export const Viewers = ({viewers}: any) => {
    if (viewers?.length === 0) {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Be the first to try this recipe!</Text>
            </View>
        );
    } else if (viewers?.length <= 4) {
        return (
            <View style={styles.container}>
                <View style={styles.profileContainer}>
                    {viewers?.map((viewer: any, index: number) => (
                        <View>
                            <Image
                                source={{uri: env.BASE_URL + viewer.attributes.image.data.attributes.url}}
                                style={[styles.profilePic, {
                                    marginLeft: index === 0 ? 0 : -15
                                }]}
                            />
                        </View>
                    ))}
                </View>

                <Text style={styles.totalText}>{viewers?.length} People</Text>
                <Text>Already Try This!</Text>
            </View>
        );
    } else {
        return (
            <View style={styles.container}>
                <View style={styles.profileContainer}>
                    {viewers?.map((viewer: any, index: number) => {
                        if (index <= 2) {
                            return (
                                <View>
                                    <Image
                                        source={{uri: env.BASE_URL + viewer.attributes.image.data.attributes.url}}
                                        style={[styles.profilePic, {
                                            marginLeft: index === 0 ? 0 : -15
                                        }]}
                                    />
                                </View>
                            );
                        } else if (index === 3) {
                            return (
                                <View style={styles.extraProfilePic}>
                                    <Text style={{color: "white"}}>
                                        {viewers?.length - 3}+
                                    </Text>
                                </View>
                            );
                        } else {
                            return null;
                        }
                    })}
                </View>

                <Text style={styles.totalText}>{viewers?.length} People</Text>
                <Text>Already Try This!</Text>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        alignItems: "flex-end",
        justifyContent: "center"
    },
    text: {
        color: "black",
        fontSize: 14
    },
    profileContainer: {
        flexDirection: "row"
    },
    profilePic: {
        height: 40,
        width: 40,
        borderRadius: 40 / 2
    },
    extraProfilePic: {
        height: 40,
        width: 40,
        alignItems: "center",
        justifyContent: "center",
        marginLeft: -15,
        borderRadius: 40 / 2,
        backgroundColor: "#40916c"
    },
    totalText: {
        marginTop: 5,
        fontWeight: "500"
    }
});
