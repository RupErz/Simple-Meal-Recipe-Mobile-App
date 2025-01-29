import React from 'react'
import {CATEGORIES} from "../data/dummy-data"
import { FlatList, StyleSheet, Text, View } from 'react-native'
import CategoryGridTile from '../components/CategoryGridTile'

const CategoriesScreen = ({ navigation }) => {

    function renderCategoryItem(itemData) {
        const pressHandler = () => {
            // Using the name from Screen to navigate the screen we want
            navigation.navigate('MealOverview', {
                categoryId: itemData.item.id,
            });
        }
    
        return (
            <CategoryGridTile title={itemData.item.title} color={itemData.item.color} onPress={pressHandler}  />
        )
    }

    return (
        <View style={styles.screen}>
            <FlatList 
                data={CATEGORIES}
                keyExtractor={item => item.id}
                renderItem={renderCategoryItem}
                numColumns={2}
            />
        </View>
    )
}

export default CategoriesScreen

const styles = StyleSheet.create({
    screen : {
        paddingVertical: 15,
    }
});