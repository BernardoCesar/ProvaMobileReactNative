import { StyleSheet, View } from 'react-native';
import { useState } from 'react';
import { EntradaDados } from './EntradaDados';
import { RenderLista }from './RenderLista';
import axios from 'axios';

export default function Main() {

  const [resultado, addResultado]= useState([]);

  const dados = async (universidade, pais) => {

    const url = "http://universities.hipolabs.com/search?" + (universidade ?`&name=${universidade}` : '' ) + (pais ? `&country=${pais}` :'' )

    const resposta = await axios.get(url)

    if (resposta.data.length < 1){
        alert("A universidade inserida não foi encontrada!");
    }else{
      addResultado(resposta.data)
    }
  }

  return (
    <View style={styles.view}>
      <EntradaDados callBackPesquisar={dados}/>
      <RenderLista resultado={resultado}/>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    marginTop: '10%',
    backgroundColor: '#220f42',

  },
  texto: {
    backgroundColor: 'yellow',
    fontSize: 32
  },
  lista:{
    padding:10,
     backgroundColor:"red",
    textAlign:"center",
    margin:10,
    borderRadius:6
  }
});
