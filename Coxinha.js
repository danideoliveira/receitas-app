import React from 'react';
import { Text, View, Image, Button, SectionList, StyleSheet } from 'react-native';

const Estilos = StyleSheet.create(

    {

        titulo: {fontSize: 28, fontWeight: 'bold', textAlign: 'center', backgroundColor: '#00994d', marginTop: 25, padding: 20, color: 'white', borderRadius: 20, width: 280},

        item: {padding: 5, fontSize: 16, height: 60, backgroundColor: 'white', width: 280},

        tituloSecao: {fontSize: 20, fontWeight: 'bold', fontStyle: 'italic', backgroundColor: '#00994d', color: 'white', textAlign: 'center', padding: 15, marginBottom: 20, width: 280},
        
        texto: {marginBottom: 30, fontSize: 16, color: 'black', textAlign: 'justify', width: 280}

    }

);

const CoxinhaApp = ({ navigation }) => {
    return(
        <View style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center', backgroundColor: 'white'}}>
        <Text style={Estilos.titulo}>Coxinha</Text>
        <Image
            style={{width: 270, height: 200, marginTop: 30, marginBottom: 30}}
            source={require('./imagens/coxinha2.jpg')}
        />
        
        <SectionList 

                sections={[

                    {title: 'Ingredientes', data: [
                          '▪ 2 copos de água',
                          '▪ 1 copo de leite',
                          '▪ 1 colher de margarina',
                          '▪ 1 cubo de caldo de galinha',
                          '▪ sal a gosto',
                          '▪ 3 xícaras de trigo'
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


          <Text style={{fontSize: 20, fontWeight: 'bold', fontStyle: 'italic', backgroundColor: '#00994d', color: 'white', textAlign: 'center', padding: 15, marginBottom: 20}}>Modo de Preparo</Text>
          <Text style={Estilos.texto}>Coloque a água, o leite, a margarina, o caldo e o sal em uma panela e misture até ferver.</Text>
          <Text style={Estilos.texto}>Abaixe o fogo e acrescente o trigo de uma só vez.</Text>
          <Text style={Estilos.texto}>Mexa até obter uma massa lisa e homogênea.</Text>
          <Text style={Estilos.texto}>Recheie da maneira que preferir.</Text>

          <View style={{alignItems: 'center', justifyContent: 'center', padding: 10}}>
        
            <Button 
                title="Voltar"
                onPress={() => navigation.goBack()}
                color = '#00994d'
            />
        
          </View>
        
        </View>
        
    </View>
  )
}

export default CoxinhaApp;