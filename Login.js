import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Text,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const Login = () => {
  const navigation = useNavigation();
  const [indexNo, setIndexNo] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleLogin = () => {
    if (!indexNo || !password) {
      Alert.alert("Error", "Input fields cannot be empty");
      return;
    }
  // Make a POST request to the server's /login endpoint with the index number and password
    fetch("http://172.20.10.2:8080/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        indexNo: indexNo,
        password: password,
      }),
    })
    // Check the response status and parse the JSON data
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else if (res.status === 422) {
          throw new Error("User with that index Number does not exist");
        } else {
          throw new Error("Login Failed, please try again");
        }
      })
      .then(async (data) => {
          // Store the JWT token in AsyncStorage upon successful login
        try {
          await AsyncStorage.setItem("token", data.token);
          Alert.alert("Success", "Login Successful!");
          navigation.navigate("BottomTabNavigator");
        } catch (e) {
          console.log("Error logging in", e);
          Alert.alert("Error", "Something went wrong. Please try again");
        }
      })
      .catch((error) => {
        console.log("Error logging in", error);
        Alert.alert("Error", error.message);
      });
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Text style={styles.welcomeText}>Welcome Back!</Text>
      <Image
        source={require("./assets/images/login.png")}
        style={styles.images}
      />
      <TextInput
        style={styles.input}
        placeholder="Index Number"
        onChangeText={(text) => setIndexNo(text)}
        value={indexNo}
      />
      <View style={styles.passwordInputContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Password"
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry={!passwordVisible}
        />
        <TouchableOpacity
          style={styles.passwordVisibilityButton}
          onPress={togglePasswordVisibility}
        >
          <Ionicons
            name={passwordVisible ? "eye-off" : "eye"}
            size={24}
            color="gray"
          />
        </TouchableOpacity>
      </View>
      <View style={styles.space} />
      <TouchableOpacity
        onPress={() => {
          handleLogin();
        }}
        style={[styles.button, styles.loginButton]}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
    // backgroundColor: '#0F52BA', // Set background color to grey
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 24,
    color: "black", // Change the text color to black
    fontStyle: "italic", // Add italic font style
    letterSpacing: 2, // Add letter spacing
    textShadowColor: "#000",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  images: {
    width: 200,
    height: 200,
    resizeMode: "contain",
    alignSelf: "center",
    marginBottom: 24,
  },
  input: {
    height: 45,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    borderRadius: 15,
    marginTop: 8,
    fontSize: 16, // Increase the font size
  },
  passwordInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    borderRadius: 15,
    marginTop: 8,
  },
  passwordInput: {
    flex: 1,
    height: 45,
    fontSize: 16,
  },
  passwordVisibilityButton: {
    padding: 8,
  },
  button: {
    height: 45,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  loginButton: {
    backgroundColor: "#000080",
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  space: {
    height: 16, // Adjust the height as needed
  },
});

export default Login;
