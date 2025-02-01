// LoginScreen.tsx
import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import firebase from 'firebase/app';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '@/firebaseConfig';
import 'firebase/firestore';
import { UserContext } from '@/context/UserContext';
import LoginForm from '@/components/account/LoginForm';

export default function AccountTab() {

  const user = auth.currentUser;

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
    <LoginForm />
  )

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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