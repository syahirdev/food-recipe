import React, { useEffect, useRef, useState } from "react";
import { Animated, View } from "react-native";
import { IngredientCard } from "../components/IngredientCard";
// @ts-ignore
import FeatherIcon from "react-native-vector-icons/Feather";
// @ts-ignore
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import { RecipeHeader } from "../components/RecipeHeader";
import { Community } from "../components/Community";
import { IngredientHeader } from "../components/IngredientHeader";

const initRecipe: RecipeProps = {
    image: "null",
    author: {
        profilePic: "",
        name: ""
    },
    isBookmark: false,
    ingredients: ""
};

interface RecipeProps {
    image: any,
    author: {
        profilePic: any,
        name: string,
    },
    isBookmark: boolean,
    ingredients: any,
}

export const Recipe = ({navigation, route}: any) => {
    const [item, setItem] = useState<RecipeProps>(initRecipe);
    const scrollY = useRef(new Animated.Value(0)).current;
    useEffect(() => {
        let {recipe} = route.params;
        setItem(recipe);
    }, []);

    return (
        <View>
            <Animated.FlatList
                data={item?.ingredients}
                keyExtractor={item => `${item.id}`}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={
                    <>
                        <RecipeHeader
                            navigation={navigation}
                            item={item}
                        />
                        <Community item={item}/>
                        <IngredientHeader totalItem={item?.ingredients?.length}/>
                    </>
                }
                scrollEventThrottle={16}
                onScroll={Animated.event([
                    {nativeEvent: {contentOffset: {y: scrollY}}}
                ], {useNativeDriver: true})}
                renderItem={({item}) => (
                    <>
                        <IngredientCard item={item}/>
                    </>
                )}
                ListFooterComponent={
                    <View style={{marginBottom: 10}}/>
                }
            />
        </View>
    );
};
