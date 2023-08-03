import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Challenges = () => {
  return (
    <View style={styles.container}>
      <Text>Challenges</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Challenges;