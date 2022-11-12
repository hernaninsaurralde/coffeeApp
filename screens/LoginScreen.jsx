import { View, Text, Image, TextInput, StatusBar, StyleSheet, KeyboardAvoidingView, Alert } from "react-native";
import React, { useState } from "react";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import LoginButton from "../components/LoginButton";
import CreateAccount from "../components/CreateAccount";
import { useNavigation } from "@react-navigation/native";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../firebase-config";
import { useFonts } from 'expo-font';

const LoginScreen = () => {
  const coffee = require("../assets/granos.png");

  const [fontsLoaded] = useFonts({
    Paris :require('../assets/fonts/Parisienne-Regular.ttf')
  })

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const handleCreateAccount = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        Alert.alert('!', 'User created',[
          {text: 'OK', onPress: ()=> console.log('User created')}
        ])
        
      })
      .catch((error) => {
        console.log(error);
        Alert.alert(error.message);
      });
  };

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("Signed in!");
        const user = userCredential.user;
        console.log(user);
        navigation.navigate("Home");
      })
      .catch((error) => {
        console.log(error);
        Alert.alert(error.message);
      });
  };

  if(!fontsLoaded) return null

  return (
    <KeyboardAvoidingView 
    behavior={Platform.OS == "ios" ? "padding" : "height"}
    keyboardVerticalOffset={Platform.OS == "ios" ? 0 : 20}
    enabled={Platform.OS === "ios" ? true : false}
  style={styles.mainContainer}>
      <Image style={styles.imgHeader} source={coffee} />
      <View style={styles.container}>
        <Text style={[styles.txtTitle, {fontFamily: 'Paris'}]}>CoffeeApp</Text>

        <TextInput
          onChangeText={(text) => setEmail(text)}
          style={styles.txtInput}
          placeholder="email@address.com"
        />
        <TextInput
          onChangeText={(text) => setPassword(text)}
          style={styles.txtInput}
          placeholder="password"
          secureTextEntry={true}
        />

        <LoginButton handleSignIn={handleSignIn} />
        <CreateAccount handleCreateAccount={handleCreateAccount} />

        <StatusBar style="auto" />
      </View>
    </KeyboardAvoidingView >
  );
};

const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      
    },
    container: {
      flex: 1,
      backgroundColor: '#013338',
      alignItems: 'center',
      justifyContent: 'center',

    },
    txtTitle: {
      fontSize: 60,
      color: '#E8D4AD',
      marginBottom: 30
    },
    txtSubtitle: {
      fontSize: 20,
      color: 'gray'
    },
    txtInput: {
      borderWidth: 1,
      backgroundColor: '#CFD4DE',
      borderColor: '#E8D4AD',
      borderRadius: 5,
      padding: 10,
      width: '80%',
      marginTop: 10,
       
      marginBottom: 30
    },
    imgHeader: {
      height: 150,
      justifyContent:'flex-start'
    },
  
  });

export default LoginScreen;
