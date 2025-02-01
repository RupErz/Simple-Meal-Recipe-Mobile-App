import React from 'react'
import { Image, Pressable, StyleSheet, Text, View, Platform } from 'react-native'

const MealItem = ({ title, imgUrl, duration, affordability, complexity }) => {
  return (
    <View style={styles.mealItem}>
        <Pressable
            android_ripple={{color: '#ccc'}}
            style = {({pressed}) => (pressed & Platform.OS === 'ios') ? styles.iosRipple : {}}
        >
            <View style={styles.innerContainer}>
                <View>
                    {/* Image from outside must be styled to been shown on screen */}
                    <Image 
                        source={{uri: imgUrl}}
                        style={styles.image}
                    />
                    <Text style={styles.title}>{title}</Text>
                </View>

                <View style={styles.details}>
                    <Text style={styles.detailsItem}>{duration}</Text>
                    <Text style={styles.detailsItem}>{complexity.toUpperCase()}</Text>
                    <Text style={styles.detailsItem}>{affordability.toUpperCase()}</Text>
                </View>
            </View>
        </Pressable>
        
        
    </View>
  )
}

export default MealItem

const styles = StyleSheet.create({
    mealItem:{
        margin: 16,
        borderRadius: 8,
        backgroundColor: 'white',
        // Shadow property for Android
        elevation: 5,
        // Shadow for IOS
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    },  
    innerContainer: {
        borderRadius: 8,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: 200,
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        margin: 8,
    },
    details: {
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
        padding: 8,
    },
    detailsItem: {
        marginHorizontal: 4,
        fontSize: 14,
    },
    iosRipple: {
        opacity: 0.25
    }
})