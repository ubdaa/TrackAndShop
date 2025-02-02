import { UserContext } from "@/context/UserContext";
import { auth, db } from "@/firebaseConfig";
import { useRouter } from "expo-router";
import { signOut } from "firebase/auth";
import { useContext } from "react";
import { Alert, View, StyleSheet, Text } from "react-native";
import Button from "../Button";
import { addDoc, collection } from "firebase/firestore";
import { Articles } from "@/constants/Articles";

export default function AccountProfile() {
  const router = useRouter();
  const { userProfile } = useContext(UserContext);
  
  const handleLogout = async () => {
    try {
      console.log(userProfile);
      await signOut(auth);
      router.replace("/(tabs)/account");
    } catch (error) {
      console.error("Erreur de déconnexion :", error);
      Alert.alert("Erreur", "La déconnexion a échoué. Veuillez réessayer.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mon compte</Text>
      <Text style={styles.subtitle}>Bienvenue {userProfile?.email}</Text>
      <Button title="Se déconnecter" onPress={handleLogout} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
  },
  subContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 20,
    color: 'gray',
    marginBottom: 20,
  },
});