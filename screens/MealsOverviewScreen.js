import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import {MEALS} from "../data/dummy-data"
import MealItem from '../components/MealItem'

const MealsOverviewScreen = ({ route }) => {
    const { categoryId } = route.params

    // List of Meal object belong to the category
    const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(categoryId) >= 0)

    const renderMealItem = (itemData) => {
        const mealItemProps = {
            title: itemData.item.title,
            imgUrl: itemData.item.imageUrl,
            duration: itemData.item.duration,
            affordability: itemData.item.affordability,
            complexity: itemData.item.complexity
        }
        return (
            <MealItem 
                {...mealItemProps}/>
        )
    }

    return (
        <View style={styles.container}>
            <FlatList 
                data={displayedMeals}
                keyExtractor={item => item.id}
                renderItem={renderMealItem}
            />
        </View>
    )
}

export default MealsOverviewScreen

const styles = StyleSheet.create({
    container : {
        flex: 1,
        padding: 16,
    }
})