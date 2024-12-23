import React, {ReactNode} from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';
import {Colors} from '../../theme';

interface PrimaryViewProps {
  children?: ReactNode;
  style?: ViewStyle;
}

const PrimaryView: React.FC<PrimaryViewProps> = ({children, style}) => {
  return (
    <View
      style={[
        styles.mainContainer,
        {backgroundColor: Colors.general.primary},
        style,
      ]}>
      {children}
    </View>
  );
};

export default PrimaryView;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
});
