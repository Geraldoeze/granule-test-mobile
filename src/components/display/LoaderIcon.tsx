import React, {useEffect, useRef} from 'react';
import {View, Animated, StyleSheet} from 'react-native';

const LoaderIcon = () => {
  // Use useRef to persist the animated values between renders
  const barAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Single animation value with interpolation for better performance
    const animation = Animated.loop(
      Animated.timing(barAnimation, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
    );

    animation.start();

    return () => animation.stop();
  }, []);

  // Create interpolated values for each bar with different output ranges
  const bar1Transform = barAnimation.interpolate({
    inputRange: [0, 0.2, 0.4, 0.6, 0.8, 1],
    outputRange: [1, 0.6, 0.8, 1, 1, 1],
  });

  const bar2Transform = barAnimation.interpolate({
    inputRange: [0, 0.2, 0.4, 0.6, 0.8, 1],
    outputRange: [1, 1, 0.6, 0.8, 1, 1],
  });

  const bar3Transform = barAnimation.interpolate({
    inputRange: [0, 0.2, 0.4, 0.6, 0.8, 1],
    outputRange: [1, 1, 1, 0.6, 0.8, 1],
  });
  

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.bar,
          {
            transform: [{scaleY: bar1Transform}],
          },
        ]}
      />
      <Animated.View
        style={[
          styles.bar,
          {
            transform: [{scaleY: bar2Transform}],
          },
        ]}
      />
      <Animated.View
        style={[
          styles.bar,
          {
            transform: [{scaleY: bar3Transform}],
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 25,
    height: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  bar: {
    width: '20%',
    height: '100%',
    backgroundColor: '#FEF7DC4D',
  },
});

export default LoaderIcon;
