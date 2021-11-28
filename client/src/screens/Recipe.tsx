import React, { useEffect, useRef, useState } from "react";
import { Animated, View } from "react-native";
import { IngredientCard } from "../components/IngredientCard";
// @ts-ignore
import FeatherIcon from "react-native-vector-icons/Feather";
// @ts-ignore
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import { RecipeHeader } from "../components/RecipeHeader";

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
    const [selectedRecipe, setSelectedRecipe] = useState<RecipeProps>(initRecipe);
    const scrollY = useRef(new Animated.Value(0)).current;
    useEffect(() => {
        let {recipe} = route.params;
        setSelectedRecipe(recipe);
    }, []);

    return (
        <View>
            <Animated.FlatList
                data={selectedRecipe?.ingredients}
                keyExtractor={item => `${item.id}`}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={
                    <>
                        <RecipeHeader
                            navigation={navigation}
                            item={selectedRecipe}
                        />
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
            />
        </View>
    );
};
