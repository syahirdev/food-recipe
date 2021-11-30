import React from 'react'
// @ts-ignore
import Icon from "react-native-vector-icons/Feather";

interface RecipeServingProps {
    duration: number,
    serving: number
}

export const RecipeServings =({duration, serving}: RecipeServingProps) => {
    return (
        <>
            <Icon name={"clock"}/> {duration} mins | {serving} Servings <Icon name={"users"}/>
        </>
    )
}
