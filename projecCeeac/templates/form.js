import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TextInput,TouchableOpacity, alert} from 'react-native';

export default function App() {

  const {nome, setNome} = useState('');
  const {Email, setEmail} = useState('');
  const {senha, setSenha} = useState('');
  const {Idade, setIdade} = useState('');
  const {sexo, setSexo} = useState('');

  const cadastro = () => {
    alert('funcionando');
    alert(email);
    alert(senha);
  }

  return (
    <View style={styles.container}>
      <StatusBar hidden />

      <Image style={{width:100,height:100}} source={require('./assests/img.jpg')}/> 

      <TextInput placeholder='Digite seu email' style={styles.textInput} onChargeText={text=>setEmail(text)}/> 
      <TextInput secureTextEntry={true } placeholder='Digite sua senha' style={styles.textInput} onChargeText={text=>setSenha(text)}/>
      <TextInput secureTextEntry={true } placeholder='Digite sua senha' style={styles.textInput} onChargeText={text=>setSenha(text)}/> 
      <TextInput secureTextEntry={true } placeholder='Digite sua senha' style={styles.textInput} onChargeText={text=>setSenha(text)}/> 
      <TextInput secureTextEntry={true } placeholder='Digite sua senha' style={styles.textInput} onChargeText={text=>setSenha(text)}/> 
      
       

      <TouchableOpacity style={styles.btnCadastro} onPress={()=>cadastro()}>
        <Text style={styles.btnText}>CADASTRAR</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2a2a2a',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,

  },
  textInput: {
    width: '100%',
    height: 40,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingLeft: 10,
    marginBottom: 10
  },
  btnCadastro:{
    width: '100%',
    height: 30,
    backgroundColor: '#7b42f5',
    borderRadius: 20,
    justifyContent: 'center',
  },
  btnText:{
    color: '#fff',
    textAlign: 'center',
  }
});