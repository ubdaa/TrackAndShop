// LoginScreen.tsx
import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import firebase from 'firebase/app';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '@/firebaseConfig';
import 'firebase/firestore';
import { UserContext } from '@/context/UserContext';

const LoginScreen: React.FC = () => {
  

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { setUserProfile } = useContext(UserContext);

  const handleLogin = async () => {
    try {
      // Connexion avec Firebase Authentication
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const uid = userCredential.user?.uid;
      if (uid) {
        // Récupération du profil utilisateur depuis Firestore (collection "users")
        // const userDoc = await firebase.firestore().collection('users').doc(uid).get();
        // if (userDoc.exists) {
        //   // Mettez à jour le contexte avec les données du profil
        //   setUserProfile(userDoc.data());
        // } else {
        //   Alert.alert("Profil non trouvé", "Aucun profil n'a été trouvé pour cet utilisateur.");
        // }
      }
    } catch (error) {
      console.error("Erreur de connexion :", error);
      Alert.alert("Erreur", "La connexion a échoué. Vérifiez vos identifiants.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Accéder à votre profil</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Mot de passe"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Se connecter" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    paddingHorizontal: 20 
  },
  title: { 
    fontSize: 24, 
    marginBottom: 20, 
    textAlign: 'center' 
  },
  input: { 
    height: 50, 
    borderColor: '#ccc', 
    borderWidth: 1, 
    marginBottom: 15, 
    paddingHorizontal: 10, 
    borderRadius: 5 
  }
});

export default LoginScreen;
