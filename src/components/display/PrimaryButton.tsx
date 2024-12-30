import {Pressable, StyleSheet, Text, TextStyle, View, ViewStyle} from 'react-native';
import React from 'react';

interface PrimaryButtonProps {
  onPress(): void;
  button_title: string;
  disabled?: boolean;
  text_style?: TextStyle;
  container_style?: ViewStyle ; 
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  onPress,
  container_style,
  text_style,
  button_title,
  disabled,
}) => {
  return (
    <Pressable onPress={onPress} disabled={disabled}>
      <View style={[styles.touchableButtonContainer, container_style]}>
        <Text
          style={[
            {
              fontSize: 18,
              fontFamily: 'Outfit Bold',
            },
            text_style,
          ]}>
          {button_title}
        </Text>
      </View>
    </Pressable>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  touchableButtonContainer: {
    height: 60,
    width: '100%',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
});
