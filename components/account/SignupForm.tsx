import { auth, db } from "@/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { Alert, Text, TextInput, StyleSheet, View } from "react-native";
import Button from "../Button";
import { useRouter } from "expo-router";

export default function SignUpForm() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const router = useRouter();

  const handleSignUp = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const uid = userCredential.user?.uid;
      if (uid) {
        // Sauvegarde des informations complémentaires dans Firestore (collection "users")
        await addDoc(collection(db, "users"), {
          name,
          email,
          photoUrl: '' // Vous pouvez ajouter une URL par défaut ou permettre l'upload de photo
        });
        Alert.alert("Inscription réussie", "Votre compte a été créé.");
      }
      router.replace("/(tabs)/account");
    } catch (error: any) {
      console.error("Erreur d'inscription :", error);
      Alert.alert("Erreur", error.message);
    }
  };

  return (
      <View style={styles.scrollContainer}>
        <Text style={styles.title}>S'inscrire - Track & Shop</Text>
        <Text style={styles.subtitle}>Bienvenue sur l'application !</Text>
        <TextInput
          style={styles.input}
          placeholder="Nom"
          value={name}
          onChangeText={setName}
        />
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
        <Button title="S'inscrire" onPress={handleSignUp} />
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