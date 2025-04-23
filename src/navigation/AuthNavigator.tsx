import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import PreloginScreen from "../screens/PreloginScreen";
import AdminLanding from "../screens/AdminHomeScreen";
import AdminMoreStats from "../screens/StatsScreen";

const AuthNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Prelogin" component={PreloginScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Admin" component={ AdminLanding } />
      <Stack.Screen name="StatsScreen" component={AdminMoreStats} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
// This code sets up a navigation container with a stack navigator for authentication screens.
