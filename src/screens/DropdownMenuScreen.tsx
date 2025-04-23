import React from "react";
import { View, SafeAreaView, Text, TouchableOpacity, StyleSheet } from "react-native";
import { colors } from "../../Color";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../navigation/Types";
import Feather from "@expo/vector-icons/Feather";

type DropdownMenuScreenProps = {
  visible: boolean;
  onLogout: () => void;
  onProfile: () => void;
  toggleDropDown: () => void;
};

const DropdownMenuScreen: React.FC<DropdownMenuScreenProps> = ({
  visible,
  onLogout,
  onProfile,
  toggleDropDown,  // Access toggleDropDown from props
}) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Display User Icon if not visible */}
      {!visible ? (
        <TouchableOpacity onPress={toggleDropDown}>
          <Feather name="user" size={34} color="black" />
        </TouchableOpacity>
      ) : (
        // If visible, show the dropdown menu
        

        <View style={styles.dropdown}>
          <TouchableOpacity style={styles.dropdownItem} onPress={onProfile}>
            <Text style={styles.dropdownText}>Mi Perfil</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.dropdownItem} onPress={onLogout}>
            <Text style={styles.dropdownText}>Cerrar Sesión</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.dropdownItem} onPress={() => {}}>
            <Text style={styles.dropdownText}>Mis reportes</Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
};




const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row", // Align items horizontally
    justifyContent: "flex-start", // Align items to the left
    alignItems: "center", // Center items vertically
    marginBottom: 40,
    paddingLeft: 10, // Ensure some space from the left edge
  },
  dropdown: {
    position: "absolute",
    top: 60,  // Adjust this value as needed based on your layout
    left: 10,
    right: 10,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 5,
  },
  dropdownItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  dropdownText: {
    fontSize: 16,
    color: colors.primary,
  },
});

export default DropdownMenuScreen;