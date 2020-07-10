import React, {} from 'react';
import { StyleSheet, View } from 'react-native';

import FlmainHeader from '../custom_components/FlaminHeader';
import InputSingIn from '../custom_components/InputSignIn';
import NavigationUISignIn from '../custom_components/NavigationUISignIn';
import LoginButton from '../custom_components/ButtonSignIn';

const PageSignIn = props => {
  return (
    <View style={styles.Screen}>
      <FlmainHeader />
      <InputSingIn />
      <NavigationUISignIn />
      <LoginButton />
    </View>
  );
}

const styles = StyleSheet.create({
  Screen: {
    flex: 1,
  },
});

export default PageSignIn;