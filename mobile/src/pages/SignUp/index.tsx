import React, { useState } from "react";
import { Pressable, SafeAreaView, Text, TextInput } from "react-native";
import api from "../../services/api";
import styles from "./style";

const Login = ({ navigation }) => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [senha, setSenha] = useState("");
  const [nascimento, setNascimento] = useState("");

  const handleSubmit = async () => {
    console.log(nome, email, username, senha, nascimento);

    const data = JSON.stringify({
      name: nome,
      email: email,
      username: username,
      password: senha,
      birthdate: nascimento,
    });

    await api.post("users", data, {
      headers: { "Content-Type": "application/json" },
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        value={nome}
        onChangeText={setNome}
        placeholder="Digite seu nome completo"
        style={styles.input}
      />

      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="Digite seu e-mail"
        style={styles.input}
        keyboardType="email-address"
      />

      <TextInput
        value={username}
        onChangeText={setUsername}
        placeholder="Crie um username"
        style={styles.input}
      />

      <TextInput
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
        placeholder="Crie uma senha"
        style={styles.input}
        keyboardType="visible-password"
      />

      <TextInput
        value={nascimento}
        onChangeText={setNascimento}
        placeholder="Data de nascimento DD/MM/AAAA"
        style={styles.input}
      />

      <Pressable style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Cadastro</Text>
      </Pressable>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("Welcome")}
      >
        <Text style={styles.buttonText}>Voltar</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default Login;
