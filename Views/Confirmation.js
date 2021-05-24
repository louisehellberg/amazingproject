import React from 'react';
import { SafeAreaView, Text, View, StyleSheet, TouchableOpacity, Button } from 'react-native';

const Confirmation = ({ navigation, route }) => {

  const YesButton = ({ onPress, title }) => (
    <TouchableOpacity onPress={onPress} style={styles.yesButtonContainer}>
      <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
  );

  const NoButton = ({ onPress, title }) => (
    <TouchableOpacity onPress={onPress} style={styles.noButtonContainer}>
      <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
  );

  const { resultParam } = route.params;

  return (
    <SafeAreaView>

      <Text style={styles.infoTitle}>Are you sure?</Text>
      
      <View style={styles.screenContainer}>
        <View style={styles.buttonContainer}>
          <YesButton title="Yes"onPress={() => 
            navigation.navigate('Result', {
              resultParam: resultParam,
            })}
          />
        </View>

        <View style={styles.buttonContainer}>
          <NoButton title="No" onPress={() => navigation.navigate('Game1')}/>
        </View>
      </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  yesButtonContainer: {
    elevation: 8,
    backgroundColor: "#A8D8A0",
    borderRadius: 10,
    paddingVertical: 2,
    paddingHorizontal: 2
  },
  noButtonContainer: {
      elevation: 8,
      backgroundColor: "#D87D7D",
      borderRadius: 10,
      paddingVertical: 2,
      paddingHorizontal: 2
    },
  appButtonText: {
    fontSize: 21,
    /* fontWeight: 'bold', */
    color: "#2E2E2E",
    alignSelf: "center",
    textTransform: "uppercase"
  },
  screenContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
  }, 
  buttonContainer: {
      margin: 5,
      width: 100,
  },
  infoTitle: {
    textAlign: "center", 
    marginBottom: 50, 
    marginTop: 125,
    color: 'white',
    fontSize: 40
  },
});

  export default Confirmation;