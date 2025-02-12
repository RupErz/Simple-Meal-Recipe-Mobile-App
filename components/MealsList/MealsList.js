import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import MealItem from './MealItem'

const MealsList = ({ displayedMeals }) => {

    const renderMealItem = (itemData) => {
        const mealItemProps = {
            id: itemData.item.id,
            title: itemData.item.title,
            imgUrl: itemData.item.imageUrl,
            duration: itemData.item.duration,
            affordability: itemData.item.affordability,
            complexity: itemData.item.complexity
        }

        return (
            <MealItem 
                {...mealItemProps}
            />
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

export default MealsList

const styles = StyleSheet.create({
    container : {
        flex: 1,
        padding: 16,
    }
})