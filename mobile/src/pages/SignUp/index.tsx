import React, { useState } from "react";
import { Pressable, SafeAreaView, Text, TextInput } from "react-native";
import styles from "./style";

const Login = ({ navigation }) => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [senha, setSenha] = useState("");
  const [nascimento, setNascimento] = useState("");

  // const handleSubmit = () => {
  //   let userData = {
  //     email,
  //     senha
  //   }
  // }

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        value={nome}
        onChangeText={(text) => setNome(text)}
        placeholder="Digite seu nome completo"
        style={styles.input}
      />

      <TextInput
        value={email}
        onChangeText={(text) => setEmail(text)}
        placeholder="Digite seu e-mail"
        style={styles.input}
      />

      <TextInput
        value={username}
        onChangeText={(text) => setUsername(text)}
        placeholder="Crie um username"
        style={styles.input}
      />

      <TextInput
        value={senha}
        onChangeText={(text) => setSenha(text)}
        placeholder="Crie uma senha"
        style={styles.input}
      />

      <TextInput
        value={nascimento}
        onChangeText={(text) => setNascimento(text)}
        placeholder="Data de nascimento"
        style={styles.input}
      />

      {/* <Pressable style={styles.button} onPress={handleSubmit}> */}
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("Login")}
      >
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
