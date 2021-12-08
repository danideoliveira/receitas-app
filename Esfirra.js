import React from 'react';
import { Text, View, Image, Button, SectionList, StyleSheet } from 'react-native';

const Estilos = StyleSheet.create(

    {

        titulo: {fontSize: 28, fontWeight: 'bold', textAlign: 'center', backgroundColor: '#ff3333', marginTop: 25, padding: 20, color: 'white', borderRadius: 20, width: 280},

        item: {padding: 5, fontSize: 16, height: 60, backgroundColor: 'white', width: 280},

        tituloSecao: {fontSize: 20, fontWeight: 'bold', fontStyle: 'italic', backgroundColor: '#ff3333', color: 'white', textAlign: 'center', padding: 15, marginBottom: 20, width: 280},
        
        texto: {marginBottom: 30, fontSize: 16, color: 'black', textAlign: 'justify', width: 280}

    }

);

const EsfirraApp = ({ navigation }) => {
    return(
        <View style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center', backgroundColor: 'white'}}>
        
            <Text style={Estilos.titulo}>Esfirra</Text>
            <Image
                style={{width: 270, height: 200, marginTop: 30, marginBottom: 30}}
                source={require('./imagens/esfirra2.jpg')}
            />
            
            <SectionList 

                    sections={[

                        {title: 'Ingredientes', data: [
                            '▪ 30 g de fermento biológico',
                            '▪ 1 copo de leite morno',
                            '▪ 1 colher (chá) de açúcar',
                            '▪ 1 colher (sobremesa) de sal',
                            '▪ 600 g de farinha de trigo (aproximadamente)',
                            '▪ 1/2 xícara de óleo',
                            '▪ 1 ovo',
                            '▪ 500 g de patinho moído',
                            '▪ 3 colheres (sopa) de azeite',
                            '▪ 1 cebola',
                            '▪ 2 dentes de alho',
                            '▪ cheiro-verde',
                            '▪ 3 tomates sem semente',
                            '▪ pimenta a gosto'
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

            <Text style={{fontSize: 20, fontWeight: 'bold', fontStyle: 'italic', backgroundColor: '#ff3333', color: 'white', textAlign: 'center', padding: 15, marginBottom: 20}}>Modo de Preparo</Text>
            <Text style={Estilos.texto}>Frite no azeite, a cebola e o alho até que dourem, coloque a carne e o sal, deixe refogar.</Text>
            <Text style={Estilos.texto}>Acrescente o tomate, cheiro-verde e a pimenta, cozinhe por mais 5 minutos.</Text>
            <Text style={Estilos.texto}>Deixe esfriar para utilizar como recheio.</Text>
            <Text style={Estilos.texto}>Coloque em uma tigela, o fermento (dissolvido no leite morno), o sal, açúcar e 2 xícaras de farinha de trigo, misture e deixe dobrar de volume.</Text>
            <Text style={Estilos.texto}>Logo, acrescente o ovo, o óleo e o restante da farinha, até a massa se desprender da mão, deixando-a macia.</Text>
            <Text style={Estilos.texto}>Sove um pouco.</Text>
            <Text style={Estilos.texto}>Divida a massa em bolinhas do mesmo tamanho, abra uma a uma, recheie e modele.</Text>
            <Text style={Estilos.texto}>Coloque as esfirras em uma assadeira, pincele com gema de ovo.</Text>
            <Text style={Estilos.texto}>Deixe crescer.</Text>
            <Text style={Estilos.texto}>Asse em forno médio.</Text>

            <View style={{alignItems: 'center', justifyContent: 'center', padding: 10}}>
        
            <Button 
                title="Voltar"
                onPress={() => navigation.goBack()}
                color = '#ff3333'
            />
        
          </View>
            
            </View>
            
        </View>
  )
}

export default EsfirraApp;