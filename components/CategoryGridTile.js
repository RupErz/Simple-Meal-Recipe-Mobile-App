import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

const CategoryGridTile = ({title, color}) => {
  return (
    <View style={styles.gridItem}>
        <Pressable style={styles.button}>
            <View style={styles.innterContainer}>
                <Text>{title}</Text>
            </View>
        </Pressable>
    </View>
  )
}

export default CategoryGridTile;

const styles = StyleSheet.create({
    gridItem: {
        flex: 1, // grab all the space within its spot 
        margin: 16,
        height: 150,
        borderRadius: 8,
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowRadius: 8,
        backgroundColor: 'white', // For IOS , require to be white for show up boxShadow
    },
    button: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    innterContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});