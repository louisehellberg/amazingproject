import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Image, Vibration, Button } from 'react-native';
import StartButton from '../Components/StartBtn';
import {State, LongPressGestureHandler} from 'react-native-gesture-handler';
  
const Game1 = ({navigation}) => {
  const StartButton = ({ title, onPress }) => (
    <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
      <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
  );

const patternEmptyChest = [700, 700, 700];
const patternBomb1Chest = [100, 100, 100];
const patternBomb2Chest = [1000, 1000, 1000];

handleStateChange = ({ nativeEvent}) => {
  if (nativeEvent.state === State.ACTIVE) {
    Vibration.vibrate(patternEmptyChest, true)
  }
  if (nativeEvent.state === State.END){
    Vibration.cancel()
  }
};

handleStateChange2 = ({ nativeEvent}) => {
  if (nativeEvent.state === State.ACTIVE) {
    Vibration.vibrate(patternBomb1Chest, true)
  }
  if (nativeEvent.state === State.END){
    Vibration.cancel()
  }
};

handleStateChange3 = ({ nativeEvent}) => {
  if (nativeEvent.state === State.ACTIVE) {
    Vibration.vibrate(patternBomb2Chest, true)
  }
  if (nativeEvent.state === State.END){
    Vibration.cancel()
  }
};

return (
      <SafeAreaView >

        <Button title="How to play" color='white' onPress={() => navigation.navigate('Info')}/>
      
        <View>
          <Text style={styles.infoTitle}>ARE YOU READY?</Text>
          <Text style={styles.infoText}>Remember which chest has which vibration pattern!</Text>
        </View>

        <View style={styles.imageContainer}>
          <LongPressGestureHandler onHandlerStateChange={this.handleStateChange}>
            <Image
                style={styles.actualImage}
                source={require('../Assets/open.png')}
            />
          </LongPressGestureHandler>

          <LongPressGestureHandler onHandlerStateChange={this.handleStateChange2}>
            <Image
                style={styles.actualImage}
                source={require('../Assets/openchestwithbomb.png')}
            />
          </LongPressGestureHandler>

          <LongPressGestureHandler onHandlerStateChange={this.handleStateChange3}>
            <Image
                style={styles.actualImage}
                source={require('../Assets/openchestwithbomb.png')}
            />
          </LongPressGestureHandler>
        </View>

        <View style={styles.buttonContainer}>
          <StartButton title="Lets go" size="sm" onPress={() => navigation.navigate('Game2')}/>
        </View>
    
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  infoTitle: {
    textAlign: "center", 
    marginBottom: 20, 
    marginTop: 25,
    color: 'white',
    fontSize: 40
  },
  infoText: {
    textAlign: "center", 
    marginBottom: 7, 
    marginTop: 7,
    color: 'white',
    fontSize: 20
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#FFBE5E",
    borderRadius: 10,
    paddingVertical: 2,
    paddingHorizontal: 6,
    margin: 5,
    width: 100
  },
  appButtonText: {
    fontSize: 18,
    color: "#2E2E2E",
    alignSelf: "center",
    textTransform: "uppercase",
  },
  buttonContainer:{
    justifyContent: 'center',
    alignItems: 'center',
  },
  actualImage: {
    width: 100,
    height: 100,
    margin: 10
  },
  imageContainer:{
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 30,
    marginTop: 30,
  }
  
  });

export default Game1;