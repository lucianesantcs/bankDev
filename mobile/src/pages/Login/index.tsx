import React, { useState } from "react";
import { Pressable, SafeAreaView, Text, TextInput, View } from "react-native";
import styles from "./style";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { useTogglePasswordVisibility } from "../../hooks/useTogglePasswordVisibility";

const Login = ({ navigation }) => {
  const { passwordVisibility, rightIcon, handlePasswordVisibility } =
    useTogglePasswordVisibility();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  // const handleSubmit = () => {
  //   let userData = {
  //     email,
  //     senha
  //   }
  // }

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        value={email}
        onChangeText={(text) => setEmail(text)}
        placeholder="Digite seu e-mail"
        style={styles.input}
      />

      <View style={styles.inputContainer}>
        <TextInput
          value={senha}
          onChangeText={(text) => setSenha(text)}
          placeholder="Digite sua senha"
          secureTextEntry={passwordVisibility}
          style={styles.inputField}
        />
        <Pressable onPress={handlePasswordVisibility}>
          <MaterialCommunityIcons name={rightIcon} size={22} color="#232323" />
        </Pressable>
      </View>

      {/* <Pressable style={styles.button} onPress={handleSubmit}> */}
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.buttonText}>Login</Text>
      </Pressable>

      <Pressable
        style={styles.buttonLink}
        onPress={() => navigation.navigate("SignUp")}
      >
        <Text style={styles.buttonTextLink}>Crie sua conta</Text>
      </Pressable>

      <Pressable style={styles.buttonLink}>
        <Text style={styles.buttonTextLink}>Esqueceu a senha?</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default Login;
