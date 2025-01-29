import React from 'react'
import { Platform, Pressable, StyleSheet, Text, View, onPress } from 'react-native'

const CategoryGridTile = ({title, color, onPress}) => {
  return (
    <View style={styles.gridItem}>
        <Pressable 
            android_ripple={{color: '#ccc'}} 
            style={({pressed}) => pressed ? [styles.button, styles.buttonPressed] : styles.button}
            onPress={onPress}
        >
            <View style={[styles.innterContainer, {backgroundColor: color}]}>
                <Text style={styles.title}>{title}</Text>
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
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    },
    button: {
        flex: 1,
    },
    buttonPressed : {
        opacity: 0.5,
    },  
    innterContainer: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16,
    }
});