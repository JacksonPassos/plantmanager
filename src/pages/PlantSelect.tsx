import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import colors from '../styles/colors'

import { Header } from '../components/Header'
import fonts from '../styles/fonts'
import { EnviromentButton } from '../components/EnviromentButton'

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

            <View>
                <FlatList
                    data={[1,2,3,4,5]}
                    renderItem={({ item }) => (
                        <EnviromentButton 
                            title="Cozinha" 
                            active
                        />
                    )}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.enviromentList}
                />
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
    },
    enviromentList: {
        height: 40,
        marginLeft: 32,
        marginBottom: 5,
        justifyContent: 'center',
        marginVertical: 32
    }


})