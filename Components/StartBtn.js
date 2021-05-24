import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
  } from 'react-native';

const StartButton = ({ navigation, title }) => (
    <TouchableOpacity onPress={() => navigation.navigate('Game1')} style={styles.appButtonContainer}>
      <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
  );

  const styles = StyleSheet.create({
    appButtonContainer: {
      elevation: 8,
      backgroundColor: "#FFBE5E",
      borderRadius: 10,
      paddingVertical: 2,
      paddingHorizontal: 6,
   
    },
    appButtonText: {
      fontSize: 18,
      color: "#2E2E2E",
      alignSelf: "center",
      textTransform: "uppercase"
    },
  })
  export default StartButton;