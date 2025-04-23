import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Feather from '@expo/vector-icons/Feather'
import DropdownMenuScreen from '../screens/DropdownMenuScreen'
import useAuthStore from '../stores/AuthStore'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '../navigation/Types'

const Header = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const { logout } = useAuthStore();
  
  const toggleDropdown = () => setDropdownVisible((prev) => !prev);

  const handleProfilePress = () => {
    setDropdownVisible(false);
    navigation.navigate('Profile');
  };

  const handleLogout = () => {
    setDropdownVisible(false);
    logout();
    navigation.reset({
      index: 0,
      routes: [{ name: 'AuthNavigator' }],
    });
  };

  return (
    <View style={styles.header}>
      <TouchableOpacity>
        <Feather name="menu" size={34} color="black" />
      </TouchableOpacity>
      <TouchableOpacity onPress={toggleDropdown}>
        <Feather name="user" size={34} color="black" />
      </TouchableOpacity>
      
      <DropdownMenuScreen
        visible={dropdownVisible}
        onLogout={handleLogout}
        onProfile={handleProfilePress}
        onClose={() => setDropdownVisible(false)}
        position={{ onRight: 10, onTop: 40 }}
      />
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 40,
  },
})