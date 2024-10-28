import React from 'react';
import {Text, TouchableOpacity, View, ActivityIndicator } from 'react-native';

import styles from './styles';

export function Button({
  isLoading,
  backButton,
  label,
  onPress,
  disabled,
  fullWidth = true,
}) {
  return (
    <View
      style={[
        backButton ? styles.contentBackButton : styles.content,
        fullWidth ? styles.contentFullWidth : undefined,
      ]}>
      <TouchableOpacity
        disabled={disabled}
        activeOpacity={1}
        style={[backButton ? styles.backButton : styles.button]}
        onPress={onPress}>
        {isLoading ? (
          <ActivityIndicator size="small" color="#ffffff" />
        ) : (
          <Text style={backButton ? styles.backButtonText : styles.buttonText}>
            {label}
          </Text>
        )}
      </TouchableOpacity>
    </View>
  );
}

export default Button;