import * as React from 'react';
import { Image, Pressable, SafeAreaView, Text, View } from 'react-native';

import styles from './style';

const Welcome = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('../../assets/cat.png')} style={styles.image} />
        <Text style={styles.title}>Bem vindo</Text>

        <Pressable style={styles.button} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.buttonText}>Entrar</Text>
        </Pressable>
    </SafeAreaView>
  );
}

export default Welcome;
