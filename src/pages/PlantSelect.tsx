import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import colors from '../styles/colors'

import { Header } from '../components/Header'
import fonts from '../styles/fonts'

export function PlantSelect() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Header />

                <Text style={styles.title}>
                    Em qual ambiente
                </Text>
                <Text style={styles.subTitle}>
                    você quer colocar sua planta?
                </Text>
            </View>
        </View>
    )


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
    header: {
        paddingHorizontal: 30,
        marginTop: 31

    },
    title:{
        fontSize: 17,
        lineHeight: 23,
        color: colors.heading,
        marginTop: 15,
        fontFamily: fonts.heading

    },
    subTitle: {
        fontSize: 17,
        lineHeight: 23,
        color: colors.heading,
        fontFamily: fonts.text

    }


})