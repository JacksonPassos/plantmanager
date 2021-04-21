import React from 'react';
import { StyleSheet, TouchableOpacity, Text, TouchableOpacityProps} from 'react-native';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface ButtonProps extends TouchableOpacityProps {
    title: string;

}

export function Button({title, ...props} : ButtonProps) {
    return(
        <TouchableOpacity style={styles.container} activeOpacity={0.7} {...props}>
            <Text style={styles.text}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.green,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        marginBottom: 10,
        height: 56
    },
    text: {
        color: colors.white,
        fontSize: 16,
        fontFamily: fonts.heading
    }
})