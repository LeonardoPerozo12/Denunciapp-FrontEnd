import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
} from "react-native";
import React from "react";
import Button from "../components/Button";
import { Image } from "expo-image";
import { colors } from "../../Color";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

const PreloginScreen = () => {
  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate("Login");
  };
  const handleAdminPage = () => {
    navigation.navigate("Admin");
  };
  const handleContinueWithoutRegistering = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "MainNavigator" }],
    });
  };
  return (
    <View style={styles.container}>
      <View style={styles.firstPart}>
        <View style={styles.textContainerOverlay}>
          <View style={{ paddingHorizontal: 20, alignItems: "center" }}>
            <Text style={styles.title}>¡Hola Ciudadano!</Text>
            <Text style={styles.subtitle}>
              Denuncia más rápido que nunca con DenunciApp
            </Text>
          </View>
        </View>
        <Image
          source={require("../../assets/image-police.webp")}
          style={{
            width: width,
            height: "100%",
            zIndex: -1,
          }}
          contentFit="cover"
        />
      </View>
      <View style={styles.secondPart}>
        <Button
          title="Login"
          onPress={handleLogin}
          backgroundColor={colors.primary}
          textColor={colors.secondary}
        />
        <Button
          title="Continua sin registrarse"
          onPress={handleContinueWithoutRegistering}
          backgroundColor={colors.secondary}
          textColor={colors.primary}
          style={{
            shadowColor: colors.primary,
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
            marginTop: 10,
          }}
        />
                <Button
          title="Admin"
          onPress={handleAdminPage}
          backgroundColor={colors.secondary}
          textColor={colors.primary}
          style={{
            shadowColor: colors.primary,
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
            marginTop: 10,
          }}
          />
      </View>
    </View>
  );
};

export default PreloginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textContainerOverlay: {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 15,
    color: "#fff",
    marginTop: 10,
    textAlign: "center",
  },
  firstPart: {
    flexShrink: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  secondPart: {
    paddingHorizontal: 20,
    paddingVertical: 60,
  },
});
