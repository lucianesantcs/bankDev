import React, { useEffect, useState } from "react";
import { Pressable, SafeAreaView, Text, TextInput, View } from "react-native";
import styles from "./style";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import api from "../../services/api";

import { useTogglePasswordVisibility } from "../../hooks/useTogglePasswordVisibility";

const Login = ({ navigation }) => {
  const { passwordVisibility, rightIcon, handlePasswordVisibility } =
    useTogglePasswordVisibility();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [remainingAttempts, setRemainingAttempts] = useState(3);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async () => {
    let userData = {
      email,
      senha,
    };

    const { data } = await api.get("users", {
      headers: { "Content-Type": "application/json" },
    });

    await data.forEach((apiData: any) => {
      if (
        apiData.email === userData.email &&
        apiData.password === userData.senha
      ) {
        navigation.navigate("Home");
      } else if (userData.email === "" || userData.senha === "") {
        setErrorMessage("Os campos não podem ser vazios.");
      } else if (apiData.password !== userData.senha) {
        setRemainingAttempts(remainingAttempts - 1);
        if (remainingAttempts <= 3 && remainingAttempts > 0) {
          setErrorMessage(
            `Senha incorreta, tentativas restantes: ${remainingAttempts}`
          );
          setRemainingAttempts(remainingAttempts - 1);
        } else if (remainingAttempts == 0) {
          setErrorMessage("Número de tentativas excedidas, usuário bloqueado.");
        }
      }
    });
  };

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
      <Text style={styles.errorMessage}>{errorMessage && errorMessage}</Text>
      <Pressable style={remainingAttempts < 0 ? [styles.button, styles.buttonDisabled] : styles.button} onPress={handleSubmit} disabled={remainingAttempts < 0}>
        <Text style={remainingAttempts < 0 ? [styles.buttonText, styles.buttonTextDisabled] : styles.buttonText }>Login</Text>
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
