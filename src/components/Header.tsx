import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import colors from '../styles/colors'

import { getStatusBarHeight } from 'react-native-iphone-x-helper'

import userImg from '../assets/user.jpeg'
import { color } from 'react-native-reanimated'
import fonts from '../styles/fonts'

export function Header() {
    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.gretting}>Olá,</Text>
                <Text style={styles.username}>Jackson</Text>
            </View>

            <Image source={userImg} style={styles.image}/>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 20,
        marginTop: getStatusBarHeight(),
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35

    },
    gretting: {
        fontSize: 32,
        lineHeight: 36,
        color: colors.heading,
        fontFamily: fonts.text

    },
    username: {
        fontSize: 32,
        lineHeight: 36,
        color: colors.heading,
        fontFamily: fonts.heading

    }
})