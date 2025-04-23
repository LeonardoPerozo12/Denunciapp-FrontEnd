import React from "react";
import { TouchableOpacity, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const GoBackBtn = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.button}>
      <Image source={require("../../assets/Arrow 1.png")} style={styles.image} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    top: 20,
    left: 10,
    padding: 10,
    zIndex: 10,
  },
  image: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  },
});

export default GoBackBtn;