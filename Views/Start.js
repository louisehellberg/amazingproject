import React from 'react';
import {
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Image,
    TouchableOpacity,
    Button
  } from 'react-native';

  import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions,
  } from 'react-native/Libraries/NewAppScreen';
  
const Start = ({navigation}) => {

  const isDarkMode = useColorScheme() === 'dark';

  const StartButton = ({ title, onPress}) => (
    <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
      <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={{color: 'black'}}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

      <View style={styles.headerContainer}>
        <Image style={styles.imageLogo}
        source={require('../Static/bombomlogga_Rityta1.png')}
        />
      </View>

      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text style={styles.sectionDescription}>Welcome to the classic game: </Text>
        <Text style={styles.sectionDescription}>Choose the right chest</Text> 
        <Image style={{width: 100, height: 100, backgroundColor: 'white', margin: 10}} source={require('../Assets/bomb1.png')}/>
        <StartButton title="Start" onPress={() => navigation.navigate('Game1')}/>
        <Button title="How to play" color='white' onPress={() => navigation.navigate('Info')}/>
      </View>

    </SafeAreaView>
  );
}
const Section = ({children, title}) => {
    const isDarkMode = useColorScheme() === 'dark';
    return (
      <View style={styles.sectionContainer}> 
        <Text
          style={[
            styles.sectionTitle,
            {
              color: 'white',
            },
          ]}>
          {title}
        </Text>
        <Text
          style={[
            styles.sectionDescription,
            
          ]}>
          {children}
        </Text>
      </View>
    );
  };

  const styles = StyleSheet.create({
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
    },
    sectionDescription: {
      
      fontSize: 18,
      fontWeight: '400',
      color: 'white'
    },
    imageLogo: {
      width: 350,
      height: 350,
      backgroundColor: 'white',
    },
    headerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2e2e2e',
        
    },
    appButtonContainer: {
      elevation: 8,
      backgroundColor: "#FFBE5E",
      borderRadius: 10,
      paddingVertical: 2,
      paddingHorizontal: 6,
      margin: 10,
      width: 100,
      marginTop: 5
    },
    appButtonText: {
      fontSize: 18,
      color: "#2E2E2E",
      alignSelf: "center",
      textTransform: "uppercase",
    },
  
  });

  export default Start;
