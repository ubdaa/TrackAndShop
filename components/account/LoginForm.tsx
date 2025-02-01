import { UserContext } from "@/context/UserContext";
import { auth, db } from "@/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState, useContext } from "react";
import { View, Text, TextInput, StyleSheet, Alert } from 'react-native';
import Button from "../Button";
import { Link, useRouter } from "expo-router";
import { collection, getDocs } from "firebase/firestore";

export default function LoginForm() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { userProfile, setUserProfile } = useContext(UserContext);
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const uid = userCredential.user?.uid;
      if (uid) {
        const querySnapshot = await getDocs(collection(db, "users"));
        querySnapshot.forEach((doc) => {
          const user = doc.data();
          if (user.email === email) {
            setUserProfile(user);
          }
        });
      }
      router.replace("/(tabs)/account");
    } catch (error) {
      console.error("Erreur de connexion :", error);
      Alert.alert("Erreur", "La connexion a échoué. Vérifiez vos identifiants.");
    }
  };

  return (
      <View style={styles.scrollContainer}>
        <Text style={styles.title}>Se connecter - Track & Shop</Text>
        <Text style={styles.subtitle}>Accéder à votre profil</Text>
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
  scrollContainer: { justifyContent: 'center', padding: 24 },
  title: { 
    fontSize: 24, 
    marginBottom: 20, 
    fontWeight: 'bold',
    textAlign: 'center' 
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center'
  },
  input: { 
    height: 50, 
    borderColor: '#ccc', 
    borderWidth: 1, 
    marginBottom: 15, 
    paddingHorizontal: 10, 
    borderRadius: 15
  }
});