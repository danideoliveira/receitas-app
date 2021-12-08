import React from 'react';
import { Text, View, Image, Button, SectionList, StyleSheet } from 'react-native';

const Estilos = StyleSheet.create(

    {

        titulo: {fontSize: 28, fontWeight: 'bold', textAlign: 'center', backgroundColor: '#331a00', marginTop: 25, padding: 20, color: 'white', borderRadius: 20, width: 280},

        item: {padding: 5, fontSize: 16, height: 60, backgroundColor: 'white', width: 280},

        tituloSecao: {fontSize: 20, fontWeight: 'bold', fontStyle: 'italic', backgroundColor: '#331a00', color: 'white', textAlign: 'center', padding: 15, marginBottom: 20, width: 280},
        
        texto: {marginBottom: 30, fontSize: 16, color: 'black', textAlign: 'justify', width: 280}

    }

);

const BoloApp = ({ navigation }) => {
    return(
        <View style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center', backgroundColor: 'white'}}>
        <Text style={Estilos.titulo}>Bolo de Chocolate</Text>
        <Image
            style={{width: 270, height: 200, marginTop: 30, marginBottom: 30}}
            source={require('./imagens/bolo2.jpg')}
        />
        
        <SectionList 

                sections={[

                    {title: 'Ingredientes', data: [
                          '▪ 4 ovos',
                          '▪ 4 colheres (sopa) de chocolate em pó',
                          '▪ 2 colheres (sopa) de manteiga',
                          '▪ 3 xícaras (chá) de farinha de trigo',
                          '▪ 2 xícaras (chá) de açúcar',
                          '▪ 2 colheres (sopa) de fermento',
                          '▪ 1 xícara (chá) de leite',
                          '▪ 2 colheres (sopa) de manteiga',
                          '▪ 7 colheres (sopa) de chocolate em pó',
                          '▪ 2 latas de creme de leite com soro',
                          '▪ 3 colheres (sopa) de açúcar'
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

          <Text style={{fontSize: 20, fontWeight: 'bold', fontStyle: 'italic', backgroundColor: '#331a00', color: 'white', textAlign: 'center', padding: 15, marginBottom: 20}}>Modo de Preparo</Text>
          <Text style={Estilos.texto}>Em um liquidificador adicione os ovos, o chocolate em pó, a manteiga, a farinha de trigo, o açúcar e o leite, depois bata por 5 minutos.</Text>
          <Text style={Estilos.texto}>Adicione o fermento e misture com uma espátula delicadamente.</Text>
          <Text style={Estilos.texto}>Em uma forma untada, despeje a massa e asse em forno médio (180 ºC) preaquecido por cerca de 40 minutos. Não se esqueça de usar uma forma alta para essa receita: como leva duas colheres de fermento, ela cresce bastante! Outra solução pode ser colocar apenas uma colher de fermento e manter a sua receita em uma forma pequena.</Text>
          <Text style={Estilos.texto}>Acrescente o creme de leite e misture bem até obter uma consistência cremosa.</Text>
          <Text style={Estilos.texto}>Desligue o fogo e acrescente o açúcar.</Text>

          <View style={{alignItems: 'center', justifyContent: 'center', padding: 10}}>
        
            <Button 
                title="Voltar"
                onPress={() => navigation.goBack()}
                color = '#331a00'
            />
        
          </View>
        
        </View>
        
    </View>
  )
}

export default BoloApp;