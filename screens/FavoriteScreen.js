import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MealsList from '../components/MealsList/MealsList'
// import { FavoritesContext } from '../store/context/favorites-context'
import {MEALS} from "../data/dummy-data"
import { useSelector } from 'react-redux'

const FavoriteScreen = () => {
  // -------------- React Context
  // const favoriteMeals = useContext(FavoritesContext);
  // We need to from id list of fav meal convert into an object Meals
  // const displayedMeals = favoriteMeals.ids.map((mealId) => {
  //   return MEALS.find((meal) => meal.id === mealId)
  // })

  //---------------- Redux
  const favoriteMealsId = useSelector((state) => state.favoriteMeals.ids)
  const displayedMeals = favoriteMealsId.map((mealId) => {
    return MEALS.find((meal) => meal.id === mealId)
  })


  if (displayedMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.favoriteTextDisplay}> You have no favorite meals yet. </Text>
      </View>
    )
  }
  return (
    <>
      <MealsList displayedMeals={displayedMeals} />
    </>
  )
}

export default FavoriteScreen

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  favoriteTextDisplay: {
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold'
  }
})