import React, { useMemo } from 'react';
import { Text, TouchableOpacity, StyleSheet, TouchableOpacityProps, } from 'react-native';
import colors from '../styles/colors';
import { Feather } from '@expo/vector-icons';

interface ButtonProps extends TouchableOpacityProps {
    title?: string
    icon?: any
}

export function Button({ title, icon, ...rest }: ButtonProps) {
    const content = useMemo(
        () => icon
            ?
            <Feather name='chevron-right' style={styles.buttonIcon} />
            :
            <Text style={styles.buttonText}>
                {title}
            </Text>,
        [icon]
    );

    return (
        <TouchableOpacity style={styles.button} activeOpacity={0.7} {...rest}>
            {content}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.green,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        marginBottom: 10,
        height: 50,
        width: 56
    },
    buttonText: {
        color: colors.white,
        fontSize: 24
    },
    buttonIcon: {
        color: colors.white,
        fontSize: 32
    },
});