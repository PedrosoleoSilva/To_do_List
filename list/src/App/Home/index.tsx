import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import {styles} from "./styles"
import Input from '@/components/Input';

export  function Home() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("@/assets/logo.png")}/>
      <View style={styles.form}>
        <Input
          placeholder='Escreva sua próxima atividade...'
        />
      </View>
    </View>
  );
}

