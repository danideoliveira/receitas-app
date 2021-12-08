import React from 'react';
import { Text, View, Image, Button } from 'react-native';

const SobreApp = ({ navigation }) => {
  return(
    <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
        <Text>Receitas</Text>
        <Text>Versão 1.0 (Beta)</Text>
        <Text style={{marginTop: 30, fontWeight: 'bold'}}>Desenvolvido por:</Text>
        <Text>Daniel de Oliveira Santos</Text>
        <Text></Text>
        <Text></Text>
        <Text style={{marginBottom: 30}}></Text>

        <Button 
            title="Voltar"
            onPress={() => navigation.goBack()}
            color='#1a1a1a'
        />
    </View>
  )
}

export default SobreApp;