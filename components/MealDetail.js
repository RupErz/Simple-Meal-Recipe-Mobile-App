import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const MealDetail = ({ duration, complexity, affordability, style, textStyle }) => {
    
    return (
        <View style={[styles.details, style]}>
            <Text style={[styles.detailsItem, textStyle]}>{duration}m</Text>
            <Text style={[styles.detailsItem, textStyle]}>{complexity.toUpperCase()}</Text>
            <Text style={[styles.detailsItem, textStyle]}>{affordability.toUpperCase()}</Text>
        </View>
    )
}

export default MealDetail

const styles = StyleSheet.create({
    details: {
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
        padding: 8,
    },
    detailsItem: {
        marginHorizontal: 4,
        fontSize: 14,
    }
})