import React from "react";
import { View, SafeAreaView, Text, TouchableOpacity, StyleSheet } from "react-native";
import { colors } from "../../Color";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../navigation/Types";
import Feather from "@expo/vector-icons/Feather";

type DropdownMenuNoUserProps = {
  visible: boolean;
  onLogin: () => void;
  toggleDropDown: () => void;
};


const DropdownMenuNoUser: React.FC<DropdownMenuNoUserProps> = ({ visible, toggleDropDown }) => {
  return (
    <SafeAreaView style={styles.dropdownWrapper}>
      <View style={styles.dropdownContainer}>
        {/* User icon button */}
        <TouchableOpacity onPress={toggleDropDown} style={styles.header}>
          <Feather name="user" size={34} color="black" />
        </TouchableOpacity>

        {/* Dropdown menu */}
        {visible && (
          <View style={styles.dropdown}>
            <TouchableOpacity style={styles.dropdownItem} onPress={() => {}}>
              <Text style={styles.dropdownText}>Iniciar Sesión</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 200,
  },
  header: {
    flexDirection: "row", // Align items horizontally
    justifyContent: "flex-start", // Align items to the left
    alignItems: "center", // Center items vertically
    marginBottom: 40,
    paddingLeft: 10, // Ensure some space from the left edge
    zIndex: 10,
  },
  dropdownWrapper: {
    position: "absolute",
    top: 40,  // Keep it at the right position from the top
    right: 10,  // Adjust the right position of the dropdown
    zIndex: 1000, // Ensure dropdown stays on top of everything else
  },
  dropdownContainer: {
    backgroundColor: "#fff",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    width: 200,  // Width of dropdown, adjust as necessary
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
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

export default DropdownMenuNoUser;