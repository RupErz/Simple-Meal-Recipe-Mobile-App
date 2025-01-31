import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const MealItem = ({ title, mealInfo }) => {
  return (
    <View>
        <Text>{title}</Text>
        <Image 
            source={{uri: mealInfo.imageUrl}}
            style={styles.image}
        />
    </View>
  )
}

export default MealItem

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200,
    }
})