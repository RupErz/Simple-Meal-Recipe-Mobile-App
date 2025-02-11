import React, { use, useContext, useLayoutEffect } from 'react'
import { Button, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import {MEALS} from "../data/dummy-data"
import MealDetail from '../components/MealDetail'
import Subtitle from '../components/MealDetail/Subtitle'
import List from '../components/MealDetail/List'
import IconButton from '../components/IconButton'
import { FavoritesContext } from '../store/context/favorites-context'


const MealsDetailScreen = ({ navigation, route }) => {
    // Accessing the context
    // const favoriteMealCtx = useContext(FavoritesContext);
    const favoriteMealCtx = useContext(FavoritesContext);

    const { mealId } = route.params

    // Check whether this meal is favorite or not by looking at fav id list. -> T/F
    const mealIsFavorite = favoriteMealCtx.ids.includes(mealId)

    // Find the Meal object we need with the id
    const selectedMeal = MEALS.find((meal) => meal.id === mealId)

    // 
    const changeFavoriteStatusHandler = () => {
        console.log("Pressed")
        if (mealIsFavorite) {
            // Remove the id from fav id list.
            favoriteMealCtx.removeFavorite(mealId)
        } else {
            favoriteMealCtx.addFavorite(mealId)
        }
        
    }

    // Dynamically update header of the screen
    useLayoutEffect(() => {
        const mealTitle = selectedMeal.title

        navigation.setOptions({
            title: mealTitle,
        })
    }, [mealId])

    // Dynamically update header of screen with a button
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <IconButton 
                    icon={mealIsFavorite ? "star" : "star-outline"}
                    onTap={changeFavoriteStatusHandler}   
                    color={"white"} 
                />
            )
        })
    }, [navigation, changeFavoriteStatusHandler])

    return (
        <ScrollView style={styles.root}>
            <View style={styles.outerContainer}>
                <Image 
                    source={{uri: selectedMeal.imageUrl}}
                    style={styles.image}
                />
                <Text style={styles.title}> {selectedMeal.title} </Text>

                <MealDetail 
                    duration={selectedMeal.duration}
                    complexity={selectedMeal.complexity}
                    affordability={selectedMeal.affordability}
                    textStyle={styles.detailText}
                />
                
                <View style={styles.outerContainer}>
                    <View style={styles.innterContainer}>
                        <Subtitle>
                            Ingredients
                        </Subtitle>
                        <List data={selectedMeal.ingredients} />

                        <Subtitle>
                            Step
                        </Subtitle>
                        <List data={selectedMeal.steps} />
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default MealsDetailScreen

const styles = StyleSheet.create({
    root: {
        marginBottom: 90
    },
    image: {
        width: '100%',
        height: 350,
    },
    outerContainer: {
        flex: 1,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        textAlign: 'center',
        margin: 6
    },
    detailText: {
        fontSize: 14,
    },
    subTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    subTitleContainer: {
        margin: 2,
        padding: 6,
        borderBottomColor: 'black',
        borderBottomWidth: 2,
        marginHorizontal: 20,
    },
    innterContainer: {
        width: '70%',
    },
    outerContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    }
})