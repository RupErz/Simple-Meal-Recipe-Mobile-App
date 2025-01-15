import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

const CategoryGridTile = ({title, color}) => {
  return (
    <View style={styles.screen}>
        <Pressable>
            <Text>{title}</Text>
        </Pressable>
    </View>
  )
}

export default CategoryGridTile;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        borderWidth: 2,
    }
});