import React, {useState} from 'react';
import {StyleSheet, View, KeyboardAvoidingView} from 'react-native';
import { TextInput, Button } from "react-native-paper";

const InputSignIn = props => {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    return(
      <View style={styles.InputUISection}>
        <View style={styles.TextInputContainer}>
          <TextInput 
            placeholder="Email"
            left={<TextInput.Icon name="email" color='#D81A21' style={styles.TextInputIcons} />}
            mode="outlined"
            activeOutlineColor='#EC1B23'
            theme={{ roundness: 5 }}
            onSubmitEditing={() => console.log("Email Submitted")}
            keyboardType="email-address"
            onChangeText={text => setEmail(text)}
            style={styles.InputText}/>

          <TextInput 
            placeholder="Password"
            left={<TextInput.Icon name="lock-outline" color='#D81A21' style={styles.TextInputIcons} />}
            mode="outlined"
            activeOutlineColor='#EC1B23'
            theme={{ roundness: 5 }}
            onSubmitEditing={() => console.log("Password Submitted")}
            secureTextEntry={true}
            onChangeText={text => setPass(text)}
            style={styles.InputText}/>
        </View>

        <View style={styles.ButtonContainer}>
          <Button style={styles.SignInButton} mode='contained' onPress={() => console.log('Sign In')}>
              Sign in
          </Button>

          <Button style={styles.RegisterButton} mode='contained' onPress={() => console.log('Register')}>
              Register
          </Button>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
    InputUISection: {
        position: 'relative',
        // alignContent: 'center',
        // justifyContent: 'center',
        // backgroundColor: "white",
        // paddingBottom: 20,
        // marginHorizontal: 100
        alignContent: 'space-between',
        // backgroundColor: 'white',
        // marginBottom: 700,
        gap: 5,
      },
      TextInputContainer: {
        gap: 7,
      },
      InputText: {
        // fontSize: 16,
        // backgroundColor: '#EC1B23',
        // color: "black",
        // borderRadius: 500,
        height: 45,
        borderWidth: 0,
      },
      TextInputIcons: {
        top: 3,
      },
      ButtonContainer: {
        // width: "100%",
        top: 50,
        gap: 20,
        // justifyContent: 'space-between',
        // alignContent: 'space-between'
      },
      SignInButton:{
        backgroundColor: '#D81A21',
        borderRadius: 0,
      },
      RegisterButton:{
        backgroundColor: '#000000',
        borderRadius: 0,
      }
});

export default InputSignIn;