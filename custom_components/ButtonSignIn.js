import React from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';

const ButtonSignIn = props => {
  return(
    <View style={styles.LoginSection}>
      <TouchableOpacity
          activeOpacity={0.7}
          style={styles.Button}>
          <Text style={[styles.LoginButtonText]}>SIGN IN</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  LoginSection: {
    top: 160,
    flex: 0.1,
    backgroundColor: "white"
  },
  Button: {
    marginRight: 100,
    marginLeft: 100,
    marginTop: 10,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor:'#EC040C',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#fff'
  },
  LoginButtonText: {
    color:'#fff',
    textAlign:'center',
    fontWeight: "bold",
    fontSize: 18,
  }
});

export default ButtonSignIn;