import React, { useState } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import Toolbar from '../../components/Toolbar';
import styles from './style';

const Home = () => {

  const options = [
    {
      name: 'Saldo',
      route: 'Saldo'
    },
    {
      name: 'Extrato',
      route: 'Extrato'
    },
    {
      name: 'Meus dados',
      route: 'Dados'
    },
    {
      name: 'Sair',
      route: 'Welcome'
    }
  ]

  return (
    <>
      <Toolbar options={options} />
      <View style={styles.container}>
        <Text>home</Text>
      </View>
    </>
  )
}

export default Home;