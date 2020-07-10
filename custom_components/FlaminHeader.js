import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

const FlaminHeader = props => {
    return (
        <View style={styles.HeaderUISection}>
            <Image style={styles.FlaminLogo} source={require("../assets/loginPage/flaminlogo.png")}/>
            <View style={styles.TextUISection}> 
                <Text style={styles.HeadingText}> DOVER RESTAURANT </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    HeaderUISection: {
        flex: 0.325,
        backgroundColor: "white",
        alignItems: "center",
      },
      FlaminLogo: {
        width: 250,
        height: 158,
        alignSelf: "center",
        resizeMode: "contain",
        top: Platform.OS === 'ios' ? 20 : 0, // i0s status bar adjustment
      },
      HeadingText: {
        paddingTop: 1,
        bottom: 10,
        fontSize: 25,
        fontWeight: "bold",
        color: "#EC040C",
        borderTopWidth: 5,
        borderBottomWidth: 6,
      },
});

export default FlaminHeader;