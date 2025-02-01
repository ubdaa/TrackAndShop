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
import { router, useRouter } from 'expo-router';

export default function AccountTab() {

  const user = auth.currentUser;

  const [formState, setFormState] = useState<Boolean>(true);
  const router = useRouter();

  if (user) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Mon compte</Text>
        <Text style={styles.subtitle}>Bienvenue {user.email}</Text>
        <Button title="Se déconnecter" onPress={() => { auth.signOut(); router.replace("/(tabs)/account") } } />
      </View>
    );
  }
  
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      {formState ? <LoginForm /> : <SignUpForm />}
      <View style={{borderBottomWidth: 1, marginBottom: 20, marginTop: 5, marginHorizontal:25, borderColor: 'gray' }}></View>
      <View style={styles.subContainer}>
        <Text style={{fontSize:15}}>{!formState ? 'Déjà un compte ? ' : 'Pas encore de compte ? '}
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
    fontSize: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 20,
    color: 'gray',
  },
});