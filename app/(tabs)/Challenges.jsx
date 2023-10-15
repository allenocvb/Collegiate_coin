
import React from 'react';
//import myImage from '/Users/allenocvb/Desktop/CollegiateCoin/assets/images/adaptive-icon.png'
import { View, Text, StyleSheet, Image } from 'react-native';


const Challenges = () => {
  return (
    <View style={styles.container}>
      <Text>Challenges</Text>
      <Text>New Challenge</Text>
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
<img> </img>

export default Challenges;












/*

import React from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
//import backgroundImage from '../../assets/fonts/'; // Adjust the path as needed

const MyComponent = () => {
  return (
    <ImageBackground source={backgroundImage} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.text}>Welcome to My App</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Click Me</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    color: 'white',
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
  },
});

export default MyComponent;

*/
