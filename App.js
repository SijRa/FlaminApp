import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Keyboard, TouchableOpacity } from 'react-native';

import PageSignIn from "./screens/PageSignIn";

export default function App() {
    /* Keyboard listener to remove focus when closed */
    useEffect(() => {
      Keyboard.addListener("keyboardDidHide", _keyboardDidHide);
      // cleanup function
      return () => {
        Keyboard.removeListener("keyboardDidHide", _keyboardDidHide);
      };
    }, []);
    const _keyboardDidHide = () => {
      Keyboard.dismiss();
    };

  return (
    <View style={styles.MainScreen}>
      <StatusBar style="auto" />
      <PageSignIn/>
    </View>
  );
}

const styles = StyleSheet.create({
  MainScreen: {
    flex: 1,
  }
});
