import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import Feather from "@expo/vector-icons/Feather";
import useAuthStore from "../stores/AuthStore";
import Button from "../components/Button";
import { colors } from "../../Color";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../navigation/Types";
import UniversalMap from "../components/MapComponent";
import DropdownMenuScreen from "./DropdownMenuScreen";

const HomeScreen = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const toggleDropdown = () => setDropdownVisible((prev) => !prev);

  const handleProfilePress = () => {
    setDropdownVisible(false);
    navigation.navigate("Profile");
  };

  const handleLogout = () => {
    setDropdownVisible(false);
    useAuthStore.getState().logout();
  };

  const handleDenunciaPress = () => {
    navigation.navigate("Chat");
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity>
            <Feather name="menu" size={34} color="black" />
          </TouchableOpacity>
          <TouchableOpacity onPress={toggleDropdown}>
            <Feather name="user" size={34} color="black" />
          </TouchableOpacity>
        </View>

        <DropdownMenuScreen
          visible={dropdownVisible}
          onLogout={handleLogout}
          onProfile={handleProfilePress}
          position={{ onRight: 10, onTop: 40 }}
        />

        <Text style={styles.title}>¡Denuncia Ya con Hector!</Text>
        <Text style={styles.subtitle}>
          Haz una denuncia rápida usando nuestro agente de inteligencia
          artificial Hector
        </Text>

        <View style={styles.buttonRow}>
          <Button
            title="Aprende sobre Hector"
            onPress={() => {}}
            backgroundColor={colors.secondary}
            textColor={colors.primary}
            style={{
              shadowColor: colors.primary,
              shadowOffset: { width: 0, height: 1 },
              shadowOpacity: 0.18,
              shadowRadius: 1.0,
              elevation: 1,
            }}
          />
          <Button
            title="Hacer denuncia"
            onPress={handleDenunciaPress}
            backgroundColor={colors.primary}
            textColor={colors.secondary}
          />
        </View>

        <Text style={styles.mapTitle}>Mapa de denuncias </Text>
        <View style={styles.mapContainer}>
          <UniversalMap />
        </View>

        <View style={styles.verMapaBtn}>
          <Button
            title="Ver mapa completo"
            onPress={() => {}}
            backgroundColor={colors.primary}
            textColor={colors.secondary}
            style={{ width: "60%" }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 40,
  },
  title: {
    width: "65%",
    fontSize: 35,
    fontWeight: "400",
    marginBottom: 10,
    color: colors.primary,
  },
  subtitle: {
    width: "85%",
    fontSize: 16,
    fontWeight: "400",
    marginBottom: 20,
    color: colors.primary,
  },
  mapTitle: {
    fontSize: 20,
    fontWeight: "400",
    marginTop: 20,
    color: colors.primary,
  },
  mapContainer: {
    width: "100%",
    padding: 10,
    backgroundColor: colors.secondary,
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 10,
    overflow: "hidden",
    marginTop: 10,
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  verMapaBtn: {
    alignItems: "flex-end",
    marginTop: 20,
    paddingBottom: 60,
  },
});
