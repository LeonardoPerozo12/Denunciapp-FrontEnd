import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Image,
} from "react-native";
import React, { useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import Button from "../components/Button";
import useAuthStore from "../stores/AuthStore";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../../Color";
import GoBackBtn from "../components/GoBackBtn";
import AuthInput from "../components/AuthInput";





const LoginScreen = () => {
  const [userForm, setUserForm] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
  });
  const { setUser, setIsLoggedIn } = useAuthStore();
  const navigation = useNavigation();
  const handleChange = (name: string, value: string) => {
    setUserForm({
      ...userForm,
      [name]: value,
    });
  };
  const handleSubmit = async () => {
    try {
      console.log("EXPO_PUBLIC_API_BASE_URL:", process.env.EXPO_PUBLIC_API_BASE_URL); // Verifica si la URL es correcta
      const response = await fetch(`${process.env.EXPO_PUBLIC_API_BASE_URL}/api/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Correo: userForm.email, // Cambiado a "Correo"
          Contraseña: userForm.password, // Cambiado a "Contraseña"
        }),
      });
  
      if (!response.ok) {
        throw new Error("Error en la autenticación");
      }
  
      const data = await response.json();
      setUser({
        id: data.id,
        name: data.name,
        lastname: data.lastname,
        email: data.email,
      });
      setIsLoggedIn(true);
      navigation.navigate("Home");
    } catch (error: any) {
      console.error("Error:", error.message);
      alert(`Error: ${error.message}`);
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <GoBackBtn/>
      <SafeAreaView style={styles.container}>
        <View style={styles.formContainer}>
          <AntDesign name="user" size={64} color={colors.primary} />
          <Text style={styles.title}>Inicio de Sesión</Text>
          <View style={{ width: "100%" }}>
            <AuthInput
              label="Correo"
              placeholder="Correo"
              value={userForm.email}
              onChangeText={(text) => handleChange("email", text)}
            />
            <AuthInput
              label="Contraseña"
              placeholder="Contraseña"
              secureTextEntry
              value={userForm.password}
              onChangeText={(text) => handleChange("password", text)}
            />
            <TouchableOpacity>
              <Text
                style={{
                  color: colors.primary,
                  textAlign: "right",
                  marginTop: 10,
                }}
              >
                ¿Olvidaste tu contraseña?
              </Text>
            </TouchableOpacity>
            <Button
              title="Iniciar Sesión"
              onPress={handleSubmit}
              backgroundColor={colors.primary}
              textColor={colors.secondary}
              style={{ marginTop: 30 }}
            />
          </View>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("Register")}
          style={{
            marginTop: 20,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text style={{ color: colors.primary }}>
            ¿No tienes cuenta? Regístrate
          </Text>
          <AntDesign
            name="arrowright"
            size={16}
            color={colors.primary}
            style={{ marginLeft: 5 }}
          />
        </TouchableOpacity>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  formContainer: {
    width: "80%",
    padding: 20,
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#fff",
    shadowColor: colors.primary,
    shadowOffset: {
      width: -5,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.primary,
    marginTop: 10,
    marginBottom: 20,
  },
  button: {
    position: "absolute",
    top: 50,
    left: 20,
    padding: 10,
    zIndex: 10,

  },
  image: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  },
});
