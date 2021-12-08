import React from 'react';
import { Text, View, Image, Button, TouchableOpacity, StyleSheet } from 'react-native';

const Estilos = StyleSheet.create({
  
  texto: { fontWeight: 'bold', fontSize: 16, marginTop: 20, color: 'white' },

});

const HomeApp = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 4, flexDirection: 'row', alignItems: 'stretch' }}>
        
        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'stretch', backgroundColor: '#663300' }}>         
          <TouchableOpacity
            onPress={() => navigation.navigate('Pudim')}
            style={{ justifyContent: 'center', alignItems: 'center' }}>
            
            <Image
              style={{ width: 165, height: 100 }}
              source={require('./imagens/pudim.png')}
            />
            
            <Text style={Estilos.texto}>Pudim</Text>
          
          </TouchableOpacity>
        </View>
        
        <View style={{ flex: 1, backgroundColor: '#00994d', justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Coxinha')}
            style={{ justifyContent: 'center', alignItems: 'center' }}>
            
            <Image
              style={{ width: 150, height: 80 }}
              source={require('./imagens/coxinha.png')}
            />

            <Text style={Estilos.texto}>Coxinha</Text>
          
          </TouchableOpacity>
        </View>
      
      </View>

      <View style={{ flex: 4, flexDirection: 'row', alignItems: 'stretch' }}>
        
        <View style={{ flex: 1, backgroundColor: '#ff3333', justifyContent: 'center', alignItems: 'center' }}>  
          <TouchableOpacity
            onPress={() => navigation.navigate('Esfirra')}
            style={{ justifyContent: 'center', alignItems: 'center' }}>
            
            <Image
              style={{ width: 150, height: 100 }}
              source={require('./imagens/esfirra.png')}
            />
            
            <Text style={Estilos.texto}>Esfirra</Text>
          
          </TouchableOpacity>
        </View>
        
        <View style={{ flex: 1, backgroundColor: '#331a00', justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Bolo de Chocolate')}
            style={{ justifyContent: 'center', alignItems: 'center' }}>
            
            <Image
              style={{ width: 150, height: 110 }}
              source={require('./imagens/bolo.png')}
            />
            
            <Text style={Estilos.texto}>Bolo de Chocolate</Text>
          </TouchableOpacity>
        </View>
      
      </View>

      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 20, marginBottom: 20 }}>
        <Button
          title="Sobre o APP"
          onPress={() => navigation.navigate('Sobre')}
          color='#1a1a1a'
        />
      </View>
    </View>
  );
};

export default HomeApp;
