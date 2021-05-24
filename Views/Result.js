import React from 'react';
import { SafeAreaView, Text, View, Button, TouchableOpacity, Image, StyleSheet, Vibration } from 'react-native';

const Result = ({ navigation, route }) => {

    const PlayAgainButton = ({ onPress, title }) => (
        <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
        <Text style={styles.appButtonText}>{title}</Text>
        </TouchableOpacity>
    );

    const { resultParam } = route.params;

    function DisplayChest() {
        if (resultParam == 'true') {
            return (
                <View>
                    {Vibration.vibrate([50,50,50], true)}

                <Text style={styles.infoTitle}>Sorry, you lost!</Text>
                <Image
                    style={styles.resultImage}
                    source={require('../Assets/openexplosion.png')}
                />
                </View>
            );
        } else {
            return (
                <View>
                <Text style={styles.infoTitle}>Congrats, you won!</Text>
                <Image
                    style={styles.resultImage}
                    source={require('../Assets/open.png')}
                />
                </View>
            );
        }
    }

    return (
      <SafeAreaView>

        <View style={styles.chestContainer}>
            {DisplayChest()}
        </View>
            
        <View style={styles.buttonContainer}>
        
            <PlayAgainButton title="Play again" onPress={() => navigation.navigate('Game1')}/>
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
    paddingHorizontal: 2,
    width: 150,
    margin: 5
},
appButtonText: {
    fontSize: 18,
    color: "#2E2E2E",
    alignSelf: "center",
    textTransform: "uppercase",
},
buttonContainer: {
    justifyContent: 'center',
    alignSelf: 'center'
},
chestContainer: {
    justifyContent: 'center',
    alignItems: 'center',
},
resultImage: {
    width: 250,
    height: 250,
    margin: 25,
},
infoTitle: {
    textAlign: "center", 
    marginBottom: 20, 
    marginTop: 25,
    color: 'white',
    fontSize: 40
    },

});

  export default Result;