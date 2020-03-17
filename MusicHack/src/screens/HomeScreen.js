import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";


const HomeScreen = ({navigation}) => {

	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
		  <Text style={styles.text}>Music Hack</Text>
		</View>
	  );
};


const styles = StyleSheet.create({
  text: {
    fontSize: 50
  }
});

export default HomeScreen;