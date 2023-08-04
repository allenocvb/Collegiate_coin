import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const ProfileScreen = () => {
  return (
    <LinearGradient
      colors={['rgb(204, 51, 36)', 'rgb(4, 76, 124)']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}>
      <View style={styles.content}>
        <Text>Profile Screen</Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ProfileScreen;
