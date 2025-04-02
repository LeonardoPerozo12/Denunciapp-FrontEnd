import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import Button from "../components/Button";
import useAuthStore from "../stores/AuthStore";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../../Color";
import AuthInput from "../components/AuthInput";

const GoBackBtn = () =>{
  const navigation = useNavigation();

  return(
    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.button}>
      <Image source={require("../../assets/Arrow 1.png")}/>
    </TouchableOpacity>
  )
}


const RegisterScreen = () => {

  const [userForm, setUserForm] = useState({
    fullName: "",
    cedula: "",
    password: "",
    confirmPassword: "",
  });

  const { setUser, setIsLoggedIn } = useAuthStore();
  const navigation = useNavigation();

  const handleChange = (name: string, value: string) => {
    setUserForm({
      ...userForm,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    setUser({
      id: Math.random().toString(),
      fullName: userForm.fullName,
      cedula: userForm.cedula,
      password: userForm.password,
    });
    setIsLoggedIn(true);
    navigation.navigate("MainNavigator");
  };

  const isBothPasswordsEqual = userForm.password === userForm.confirmPassword;
  const isFormValid =
    userForm.fullName &&
    userForm.cedula &&
    userForm.password &&
    userForm.confirmPassword &&
    isBothPasswordsEqual;

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
    >
      <View>
        <GoBackBtn/>
      </View>
      <SafeAreaView style={styles.container}>
        <View style={styles.formContainer}>
          <AntDesign name="user" size={64} color={colors.primary} />
          <Text style={styles.title}>Registrate</Text>
          <View style={{ width: "100%" }}>


            
            <AuthInput
              label="Nombre completo"
              placeholder="Juan Pérez"
              value={userForm.fullName}
              onChangeText={(text) => handleChange("fullName", text)}
            />
            <AuthInput
              label="Cédula"
              placeholder="000-0000000-0"
              value={userForm.cedula}
              onChangeText={(text) => handleChange("cedula", text)}
            />
            <AuthInput
              label="Contraseña"
              placeholder="Contraseña"
              secureTextEntry
              value={userForm.password}
              onChangeText={(text) => handleChange("password", text)}
            />
            <AuthInput
              label="Confirmar Contraseña"
              placeholder="Confirmar Contraseña"
              secureTextEntry
              value={userForm.confirmPassword}
              onChangeText={(text) => handleChange("confirmPassword", text)}
            />

            <Button
              title="Registrarme"
              disabled={!isFormValid}
              onPress={handleSubmit}
              backgroundColor={colors.primary}
              textColor={colors.secondary}
              style={{ marginTop: 30 }}
            />
          </View>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;

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
