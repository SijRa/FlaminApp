import React, {} from 'react';
import { StyleSheet, View, ImageBackground, Image, KeyboardAvoidingView, Dimensions } from 'react-native';

import InputSingIn from '../custom_components/InputSignIn';

const PageSignIn = props => {
  return (
    <View style={styles.Screen}>
      <Image style={styles.Background} source={require('../assets/loginPage/loes-klinker-4DDVPoM5QWI-unsplash.jpg')}></Image>
      <KeyboardAvoidingView style={styles.Main}>
        <Image style={styles.FlaminLogo} source={require("../assets/loginPage/flaminlogo.png")}/>
        <InputSingIn/>
      </KeyboardAvoidingView>
    </View>
  );
}

const d = Dimensions.get("window")

const styles = StyleSheet.create({
  Screen: {
    flex: 1,
  },
  Background: {
    position: 'absolute',
    height: d.height + 100,
    width: d.width,
    resizeMode: 'cover'
  },
  Main: {
    flex: 1,
    alignContent: 'space-between',
    alignSelf: 'center'
  },
  FlaminLogo: {
    resizeMode: 'contain',
    width: 250,
    height: 230,
  }
});

export default PageSignIn;