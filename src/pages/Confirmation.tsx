import React, { useState } from 'react';
import {  SafeAreaView, Text, KeyboardAvoidingView, StyleSheet, Dimensions, View, TextInput, Platform } from 'react-native';
import { Button } from '../components/Button'

import colors from '../styles/colors';
import fonts from '../styles/fonts';

import { Feather } from '@expo/vector-icons'


export function Confirmation() {

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
                            <Button title="Começar"/>
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