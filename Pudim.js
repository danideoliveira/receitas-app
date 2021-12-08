import React from 'react';
import { Text, View, Image, Button, SectionList, StyleSheet } from 'react-native';

const Estilos = StyleSheet.create(

    {

        titulo: {fontSize: 28, fontWeight: 'bold', textAlign: 'center', backgroundColor: '#663300', marginTop: 25, padding: 20, color: 'white', borderRadius: 20, width: 280},

        item: {padding: 5, fontSize: 16, height: 60, backgroundColor: 'white', width: 280},

        tituloSecao: {fontSize: 20, fontWeight: 'bold', fontStyle: 'italic', backgroundColor: '#663300', color: 'white', textAlign: 'center', padding: 15, marginBottom: 20, width: 280},
        
        texto: {marginBottom: 30, fontSize: 16, color: 'black', textAlign: 'justify', width: 280}

    }

);

const PudimApp = ({ navigation }) => {
    return(
        <View style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center', backgroundColor: 'white'}}>
        <Text style={Estilos.titulo}>Pudim</Text>
        <Image
            style={{width: 270, height: 200, marginTop: 30, marginBottom: 30}}
            source={require('./imagens/pudim2.png')}
        />
        
        <SectionList 

                sections={[

                    {title: 'Ingredientes', data: [
                          '▪ 1 lata de leite condensado',
                          '▪ 1 lata de leite (medida da lata de leite condensado)',
                          '▪ 3 ovos inteiros',
                          '▪ 1 xícara (chá) de açúcar',
                          '▪ 1/2 xícara de água'
                    ]}
                               
                            
                ]}


                renderItem={

                    ({item}) => <Text style={Estilos.item}>{item}</Text>

                }


                renderSectionHeader={

                    ({section}) => <Text style={Estilos.tituloSecao}>{section.title}</Text>

                }

            />
        <View style={{padding: 15}}>

          <Text style={{fontSize: 20, fontWeight: 'bold', fontStyle: 'italic', backgroundColor: '#663300', color: 'white', textAlign: 'center', padding: 15, marginBottom: 20}}>Modo de Preparo</Text>
          <Text style={Estilos.texto}>Primeiro, bata bem os ovos no liquidificador.</Text>
          <Text style={Estilos.texto}>Acrescente o leite condensado e o leite, e bata novamente.</Text>
          <Text style={Estilos.texto}>Derreta o açúcar na panela até ficar moreno, acrescente a água e deixe engrossar.</Text>
          <Text style={Estilos.texto}>Coloque em uma forma redonda e despeje a massa do pudim por cima.</Text>
          <Text style={Estilos.texto}>Asse em forno médio por 45 minutos, com a assadeira redonda dentro de uma maior com água.</Text>
          <Text style={Estilos.texto}>Espete um garfo para ver se está bem assado.</Text>
          <Text style={Estilos.texto}>Deixe esfriar e desenforme.</Text>

          <View style={{alignItems: 'center', justifyContent: 'center', padding: 10}}>
        
            <Button 
                title="Voltar"
                onPress={() => navigation.goBack()}
                color = '#663300'
            />
        
          </View>
        
        </View>
        
    </View>
  )
}

export default PudimApp;