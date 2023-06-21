import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet, ScrollView, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Update = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [password, setPassword] = useState('');
  const [profileImage, setProfileImage] = useState(null);

  const handleUpdate = () => {
    // Perform update logic here
    console.log('Update button pressed');
    console.log('Email:', email);
    console.log('Phone Number:', phoneNumber);
    console.log('Date of Birth:', dateOfBirth);
    console.log('Password:', password);
    console.log('Profile Image:', profileImage);
  };

  const handleProfileImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (upload) => {
      setProfileImage(upload.target.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <StatusBar backgroundColor="lightblue" barStyle="dark-content" />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Ionicons name="md-arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Update</Text>
      </View>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.welcomeText}>Update Your Details Here</Text>
        <View style={styles.profileImageContainer}>
          {profileImage ? (
            <Image source={{ uri: profileImage }} style={styles.profileImage} />
          ) : (
            <Text style={styles.profileImagePlaceholder}>Select Profile Image</Text>
          )}
          <input type="file" accept="image/*" onChange={handleProfileImageUpload} />
        </View>
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
          value={email}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          onChangeText={(text) => setPhoneNumber(text)}
          value={phoneNumber}
          keyboardType="phone-pad"
        />
        <TextInput
          style={styles.input}
          placeholder="Date of Birth"
          onChangeText={(text) => setDateOfBirth(text)}
          value={dateOfBirth}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry
        />
        <View style={styles.space} />
        <TouchableOpacity onPress={handleUpdate} style={[styles.button, styles.updateButton]}>
          <Text style={styles.buttonText}>Update</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 40,
    paddingBottom: 20,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: 'lightblue',
    paddingHorizontal: 16,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 16,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 24,
    textTransform: 'uppercase',
    letterSpacing: 2,
    color: '#333',
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  input: {
    height: 45,
    fontSize: 16,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    borderRadius: 15,
    marginTop: 8,
  },
  button: {
    height: 45,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  updateButton: {
    backgroundColor: '#006994',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  space: {
    height: 16,
  },
  profileImageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 120,
    width: 120,
    borderRadius: 60,
    borderWidth: 1,
    borderColor: 'gray',
    alignSelf: 'center',
    marginBottom: 24,
  },
  profileImage: {
    height: 120,
    width: 120,
    borderRadius: 60,
  },
  profileImagePlaceholder: {
    textAlign: 'center',
    fontSize: 16,
    color: '#888',
  },
});

export default Update;
