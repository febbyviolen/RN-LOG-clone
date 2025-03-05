import React from 'react';
import { View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const GradientLine = () => {
  return (
    <LinearGradient
      colors={['purple', 'blue', 'green', 'orange', 'red']}
      start={{ x: 0, y: 0.5 }}
      end={{ x: 1, y: 0.5 }}
      style={{ height: 5, width: '100%', borderRadius: 5, position: 'absolute'}}
    />
  );
};

export default GradientLine;