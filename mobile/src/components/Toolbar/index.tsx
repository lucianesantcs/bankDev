import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Modal, Pressable, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import styles from './style';

const Toolbar = (props: any) => {
  const navigation = useNavigation();
  const [ModalVisible, setModalVisible] = useState(false)

  const handleGoBack = () => {
    navigation.goBack();
  }

  const handleModalClick = (value: boolean) => {
    setModalVisible(value);
  }

  const handleMenuNavigationClick = (route: string) => {
    setModalVisible(false);
    if (route) {
      // navegar para rota escolhida
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Pressable onPress={handleGoBack}>
        <Icon name='arrow-left' size={24} />
      </Pressable>

      <Pressable onPress={() => handleModalClick(true)}>
        <Icon name='menu' size={24} />
      </Pressable>

      <Modal transparent visible={ModalVisible}>
        <TouchableOpacity style={styles.menuContainer} onPress={() => handleModalClick(false)}>
        <SafeAreaView>
          <View style={styles.menuContent}>
            {
              props.options?.map((options: any, index: number) => {
                return <Text key={index} onPress={() => handleMenuNavigationClick(options.route)} style={[styles.menuText, styles.menuBorderBottom]}>{options.name}</Text>
              })
            }
          </View>
        </SafeAreaView>
        </TouchableOpacity>
      </Modal>
    </SafeAreaView>
  )
}

export default Toolbar;