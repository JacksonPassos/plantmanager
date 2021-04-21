import React from 'react';
import { StyleSheet, TouchableOpacity, Text, TouchableOpacityProps} from 'react-native';
import colors from '../styles/colors';

interface ButtonProps extends TouchableOpacityProps {
    title: string;

}

export function Button({title, ...props} : ButtonProps) {
    return(
        <TouchableOpacity style={styles.button} activeOpacity={0.7} {...props}>
            <Text style={styles.buttonText}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.green,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        marginBottom: 10,
        height: 70,
        width: 200,
        paddingHorizontal: 10
    },
    buttonText: {
        color: colors.white
    }
})