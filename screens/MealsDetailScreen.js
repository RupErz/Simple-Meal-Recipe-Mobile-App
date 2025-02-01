import React, { useLayoutEffect } from 'react'
import { Text, View } from 'react-native'
import {MEALS} from "../data/dummy-data"


const MealsDetailScreen = ({ navigation, route }) => {

    const { mealId } = route.params

    // Find the Meal object we need with the id
    const selectedMeal = MEALS.find((meal) => meal.id === mealId)

    // Dynamically update header of the screen
    useLayoutEffect(() => {
        const mealTitle = selectedMeal.title

        navigation.setOptions({
            title: mealTitle
        })
    }, [mealId])

    return (
        <View>
            <Text> {selectedMeal.ingredients} </Text>
        </View>
    )
}

export default MealsDetailScreen