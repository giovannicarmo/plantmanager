import { Feather } from '@expo/vector-icons';
import React, { useMemo } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps
} from 'react-native';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface ButtonProps extends TouchableOpacityProps {
  title?: string;
  icon?: boolean;
}

export function Button({ title, icon = false, ...rest }: ButtonProps) {
  const content = useMemo(
    () =>
      icon ? (
        <Feather name="chevron-right" style={styles.icon} />
      ) : (
        <Text style={styles.text}>{title}</Text>
      ),
    [icon]
  );

  const buttontypeStyle = useMemo(
    () => (icon ? styles.buttonIcon : styles.buttonText),
    [icon]
  );

  return (
    <TouchableOpacity
      style={[styles.button, buttontypeStyle]}
      activeOpacity={0.7}
      {...rest}
    >
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
  },
  buttonText: {
    height: 56,
  },
  buttonIcon: {
    height: 50,
    width: 56,
  },
  text: {
    color: colors.white,
    fontFamily: fonts.heading,
    fontSize: 16,
  },
  icon: {
    color: colors.white,
    fontSize: 32,
  },
});
