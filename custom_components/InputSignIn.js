import React, {useState} from 'react';
import {StyleSheet, View, Image, TextInput} from 'react-native';

const InputSignIn = props => {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    return(
        <View style={styles.InputUISection}>
          <View style={styles.InputUIBorder}>
            <Image style={styles.AccountIcon} source={require("../assets/loginPage/account_icon.png")}/>
            <TextInput 
              placeholder="Email"
              onSubmitEditing={() => console.log("Email Submitted")}
              keyboardType="email-address"
              onChangeText={text => setEmail(text)}
              style={styles.InputText}/>
          </View>
          <View style={styles.InputUIBorder}>
            <Image style={styles.PasswordIcon} source={require("../assets/loginPage/password_icon.png")}/>
            <TextInput 
              placeholder="Password"
              onSubmitEditing={() => console.log("Password Submitted")}
              secureTextEntry={true}
              onChangeText={text => setPass(text)}
              style={styles.InputText}/>
          </View>
      </View>
    );
}

const styles = StyleSheet.create({
    InputUISection: {
        top: 40,
        justifyContent: "space-around",
        backgroundColor: "white",
        flex: 0.2,
        paddingBottom: 20,
        marginHorizontal: 100
      },
      InputUIBorder: {
        borderBottomWidth: 2,
        paddingBottom: 6
      },
      InputText: {
        fontSize: 16,
        color: "black",
      },
      AccountIcon: {
        top: 20,
        left: 30,
        height: 24,
        width: 24,
        alignSelf: "flex-end",
      },
      PasswordIcon: {
        top: 20,
        left: 30,
        height: 24,
        width: 24,
        alignSelf: "flex-end",
      },
});

export default InputSignIn;