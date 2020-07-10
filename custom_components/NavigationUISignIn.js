import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

const NavigationUISignIn = props => {
  return(
    <View style={styles.NavigationUISection}>
      <View style={styles.NavigationStatus}>
        <View style={styles.NavCircle} />
        <View style={styles.SelectedCircle} />
        <View style={styles.NavCircle} />
      </View>
      <View style={styles.NavigationTextUI}>
        {/* <Image style={styles.SwipeIcon} source={require("../assets/loginPage/swipe_icon.png")}/> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    NavigationUISection: {
        top: 80,
        justifyContent: "space-around",
        flexDirection: "column",
        backgroundColor: "white",
        alignItems: "center",
      },
      NavigationStatus: {
        backgroundColor: "white",
        top: 0, // 70
        alignSelf: "center",
        width: 200,
        flexDirection: "row",
        justifyContent: "space-between",
      },
      NavCircle: {
        width: 20,
        height: 20,
        borderRadius: 20/2,
        backgroundColor: 'grey',
      },
      SelectedCircle: {
        width: 20,
        height: 20,
        borderRadius: 20/2,
        backgroundColor: '#EC040C',
        borderColor: "black",
      },
      NavigationTextUI: {
        top: 25, // 60
        flexDirection: "row",
        backgroundColor: "white",
      },
      NavigationText: {
        top: 0,
        fontSize: 10,
      },
      SwipeIcon: {
        height: 24,
        width: 24,
      },
});

export default NavigationUISignIn;