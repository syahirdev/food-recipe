import React from "react";
// @ts-ignore
import FAIcon from "react-native-vector-icons/FontAwesome";
import { COLORS } from "../constants";
import { TouchableOpacity } from "react-native";

export const BookmarkIcon = ({isBookmark, onPress}: any) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <FAIcon
                name={isBookmark ? "bookmark" : "bookmark-o"}
                size={20}
                color={COLORS.green}/>
        </TouchableOpacity>
    );
};
