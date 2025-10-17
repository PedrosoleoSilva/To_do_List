import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import {styles} from "./styles"
import Input from '@/components/Input';
import Button from '@/components/Button';
import Filter from '@/components/Filter';
import { FilterStatus } from '@/types/FilterStatus';



export  function Home() {
  return (
    <View style={styles.container}>
      <StatusBar/>
      <Image style={styles.logo} source={require("@/assets/logo.png")} />
      <View style={styles.form}>
        <Input
          placeholder='Escreva sua próxima atividade...'
        />
        <Button 
          title='Adicionar!'
          onPress={()=> console.log("Tarefa adicionada com suceesso!")}
        />
      </View>
      <View style={styles.content}>
        <Filter status={FilterStatus.COMPLETED} isActive/>

      </View>
    </View>
  );
}

