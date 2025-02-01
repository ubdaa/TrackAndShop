// LoginScreen.tsx
import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, KeyboardAvoidingView, Platform } from 'react-native';
import firebase from 'firebase/app';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '@/firebaseConfig';
import 'firebase/firestore';
import { UserContext } from '@/context/UserContext';
import LoginForm from '@/components/account/LoginForm';
import SignUpForm from '@/components/account/SignupForm';

export default function AccountTab() {

  const user = auth.currentUser;

  const [formState, setFormState] = useState<Boolean>(false);

  if (user) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Mon compte</Text>
        <Text style={styles.subtitle}>Bienvenue {user.email}</Text>
        <Button title="Se déconnecter" onPress={() => auth.signOut()} />
      </View>
    );
  }
  
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      {formState ? <LoginForm /> : <SignUpForm />}
      <View style={styles.subContainer}>
        <Text>{!formState ? 'Déjà un compte ? ' : 'Pas encore de compte ? '}
          <Text style={styles.link} onPress={e => {setFormState(!formState)}}>{!formState ? 'Se connecter' : 'S\'inscrire'}</Text>
        </Text>
      </View>
    </KeyboardAvoidingView>
  )

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  subContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  link: {
    color: 'blue',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    color: 'gray',
  },
});