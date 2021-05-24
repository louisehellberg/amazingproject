import React from 'react';
import {SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Image, Vibration} from 'react-native';
import {State, LongPressGestureHandler} from 'react-native-gesture-handler';

const Game2 = ({ navigation }) => {
  
const PickChestButton = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

const patternEmptyChest = [700, 700, 700];
const patternBomb1Chest = [100, 100, 100];
const patternBomb2Chest = [1000, 1000, 1000];

const oterPatternList = [patternEmptyChest, patternBomb1Chest, patternBomb2Chest];
var currentIndex = oterPatternList.length, temporaryValue, randomIndex;
console.log(currentIndex)

while (0 !== currentIndex) {
  randomIndex = Math.floor(Math.random() * currentIndex);
  currentIndex -= 1;

  temporaryValue = oterPatternList[currentIndex];
  oterPatternList[currentIndex] = oterPatternList[randomIndex];
  oterPatternList[randomIndex] = temporaryValue;
}

const chestVibration1 = oterPatternList[0];
const chestVibration2 = oterPatternList[1];
const chestVibration3 = oterPatternList[2];

let chestButton1 = 'true'; 
let chestButton2 = 'true';
let chestButton3 = 'true';

if (chestVibration1 == patternEmptyChest) {
  chestButton1 = 'false';
  console.log("1 r empty", chestVibration1)
}
else if (chestVibration2 == patternEmptyChest) {
  chestButton2 = 'false';
  console.log("2 r empty", chestVibration2)
}
else if (chestVibration3 == patternEmptyChest) {
  chestButton3 = 'false';
  console.log("3 r empty", chestVibration3)
}


handleStateChange = ({ nativeEvent}) => {
  if (nativeEvent.state === State.ACTIVE) {
    Vibration.vibrate(chestVibration1, true)
  }
  if (nativeEvent.state === State.END){
    Vibration.cancel()
  }
};

handleStateChange2 = ({ nativeEvent}) => {
  if (nativeEvent.state === State.ACTIVE) {
    Vibration.vibrate(chestVibration2, true)
  }
  if (nativeEvent.state === State.END){
    Vibration.cancel()
  }
};

handleStateChange3 = ({ nativeEvent}) => {
  if (nativeEvent.state === State.ACTIVE) {
    Vibration.vibrate(chestVibration3, true)
  }
  if (nativeEvent.state === State.END){
    Vibration.cancel()
  }
};

return (
  <SafeAreaView >
    
    <View>
      <Text style={styles.infoTitle}>MAKE YOUR PICK!</Text>
      <Text style={styles.infoText}>Identify the chest WITHOUT a bomb!</Text>
    </View>

    <View style={styles.imageContainer}>
      <LongPressGestureHandler onHandlerStateChange={this.handleStateChange}>
          <Image
              style={styles.actualImage}
              source={require('../Assets/closed.png')}
          />
        </LongPressGestureHandler>

        <LongPressGestureHandler onHandlerStateChange={this.handleStateChange2}>
          <Image
              style={styles.actualImage}
              source={require('../Assets/closed.png')}
          />
        </LongPressGestureHandler>

        <LongPressGestureHandler onHandlerStateChange={this.handleStateChange3}>
          <Image
              style={styles.actualImage}
              source={require('../Assets/closed.png')}
          />
        </LongPressGestureHandler>
    </View>

    <View style={styles.screenContainer}>

      <View style={styles.buttonContainer}>
        <PickChestButton title="Pick" onPress={() => 
          navigation.navigate('Confirmation', {
            resultParam: chestButton1,
          })}
        />
      </View>

      <View style={styles.buttonContainer}>
        <PickChestButton title="Pick" onPress={() => 
          navigation.navigate('Confirmation', {
            resultParam: chestButton2,
          })}
        />
      </View>

      <View style={styles.buttonContainer}>
        <PickChestButton title="Pick" onPress={() => 
          navigation.navigate('Confirmation', {
            resultParam: chestButton3,
          })}
        />
      </View>

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
  screenContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  }, 
  buttonContainer: {
    margin: 5,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
  },
  actualImage: {
    width: 100,
    height: 80,
    margin: 10
  },
  imageContainer:{
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 30,
    marginTop: 30,
  }

  });

export default Game2;