import React from 'react';
import { SafeAreaView, Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native';
import StartBtn from '../Components/StartBtn';

const Info = ({navigation}) => {

  const StartButton = ({ title }) => (
      <TouchableOpacity onPress={() => navigation.navigate('Game1')} style={styles.appButtonContainer}>
        <Text style={styles.appButtonText}>{title}</Text>
      </TouchableOpacity>
    );

  return (
    <SafeAreaView>
        <Text style={styles.infoTitle}>HOW TO PLAY</Text>
        <Text style={styles.infoText}>The purpose of the game is to choose the chest WITHOUT a bomb. 
                                      When the game starts you will see 3 open chests. 
                                      Every chest has its own vibration pattern that you can feel if you hold your finger on the chest. 
                                      Try to remember the vibration pattern of the chest WITHOUT a bomb.                      
        </Text>
        <Text style={styles.infoText}>When clicking on LETS GO, the chests will close and move around in random order. 
                                      Your task is then to find the chest WITHOUT a bomb! 
                                      Hold your finger on the different chests to feel the vibration patterns and identify the chest WITHOUT a bomb!
                                      Choose the chest you think is correct by clicking the button underneath it.
        </Text>

        <Text style={styles.infoText}>Do you think you can do it?</Text>
        
        <View style={styles.screenContainer}>
        
          <StartButton title="Continue" size="sm"/>
        </View>

    </SafeAreaView>
  );
};

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
    infoTitle: {
        textAlign: "center", 
        marginBottom: 7, 
        marginTop: 25,
        color: 'white',
        fontSize: 40
    },
    infoText: {
        textAlign: "center", 
        marginBottom: 9, 
        marginTop: 7,
        color: 'white',
        fontSize: 20,
        paddingHorizontal: 15
    },
    screenContainer: {
        margin: 'auto',
        marginLeft: 130,
        marginTop: 10,
        width: 130,
    }
  });

  export default Info;
  

