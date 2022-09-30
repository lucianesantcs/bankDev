import React, { useState } from 'react';
import { Pressable, SafeAreaView, Text, TextInput, View } from 'react-native';
import styles from './style';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

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

      <TextInput 
        value={senha} 
        onChangeText={(text) => setSenha(text)}
        placeholder="Digite sua senha"
        style={styles.input}
      />

      {/* <Pressable style={styles.button} onPress={handleSubmit}> */}
      <Pressable style={styles.button} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Login</Text>
      </Pressable>

      <Pressable style={styles.buttonLink}>
        <Text style={styles.buttonTextLink}>Esqueceu a senha?</Text>
      </Pressable>
    </SafeAreaView>
  )
}

export default Login;