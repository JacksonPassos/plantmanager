import React, { useState } from 'react';
import {  SafeAreaView, Text, KeyboardAvoidingView, StyleSheet, Dimensions, View, TextInput, Platform } from 'react-native';
import { Button } from '../components/Button'

import colors from '../styles/colors';
import fonts from '../styles/fonts';

import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/core';


export function Confirmation() {
    const navigation = useNavigation()
    function handleMoveOn() {
        navigation.navigate('PlantSelect')

    }

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.emoji}>
                    😄
                </Text>

                <Text style={styles.title}>
                    Prontinho
                </Text>

                <Text style={styles.subTitle}>
                    Agora vamos começar a cuidar das suas plantinhas com muito cuidado.
                </Text>

                <View style={styles.footer}>
                    <Button title="Começar" onPress={handleMoveOn}/>
                </View>

            </View>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    content: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30
    },
    emoji: {
        fontSize: 96
    },
    title: {
        fontSize: 30,
        lineHeight: 32,
        fontFamily: fonts.heading,
        color: colors.heading,
        marginTop: 64,
        textAlign: 'center'
    },
    subTitle: {
        fontSize: 17,
        lineHeight: 25,
        fontFamily: fonts.text,
        color: colors.heading,
        marginTop: 16,
        textAlign: 'center',
        paddingHorizontal: 20
    },
    footer: {
        marginTop: 40,
        width: '100%',
        paddingHorizontal: 20
    }

  
})