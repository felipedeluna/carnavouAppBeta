import React, { useContext, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';
import MyContext from '../../components/context';
import { Appbar } from 'react-native-paper';
import Card, { CardProps } from '../card';
import { useNavigation, NavigationProp } from '@react-navigation/native';  // Importação necessária para a navegação
import DownNavBar from '../downNavBar';  // Importação do DownNavBar

const MyListScreen = () => {
const { savedCards, removeCard } = useContext(MyContext) || { savedCards: [], removeCard: () => { } };
const navigation = useNavigation<NavigationProp<any, any>>();  // Hook de navegação

    // Log saved cards on load
    useEffect(() => {
        console.log("Carregando lista de blocos salvos...");
        if (savedCards.length === 0) {
            console.log("Nenhum bloco encontrado na lista.");
        } else {
            console.log("Blocos carregados:", savedCards);
        }
    }, [savedCards]);

    return (
         <View style={{ flex: 1 }}> 
            <Appbar.Header>
            <View style={styles.header}>
                <Image source={require('../../assets/images/carnavou-logo-nav.png')} />
            </View>
            </Appbar.Header>
            <ScrollView style={styles.mainContainer}>
            <Text style={styles.title}>MINHA LISTA</Text>
                    <View style={{ flex: 1 }}> 
                        {savedCards.length > 0 ? (
                        savedCards.map((cardData, index) => (
                            <Card
                                key={index}
                                nome={cardData.nome}
                                data={cardData.data}
                                hora={cardData.hora}
                                endereco={cardData.endereco}
                                onRemove={() => removeCard(cardData.nome)}
                            />
                        ))
                    ) : (
                        <Text>Nenhum bloco salvo ainda.</Text>
                    )}
                    </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        marginTop: 20,
        marginLeft: 26,
        marginRight: 26,
        marginBottom: 12,
    },
    header: {
        width: '100%',
        backgroundColor: '#EBFF01',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        paddingTop: 38,
        marginBottom: 20,
    },
    title: {
        fontSize: 24,  
        fontWeight: 'bold',  
        color: '#682B7D',  
        textAlign: 'center',
        marginTop:28,
        marginBottom: 20,

    },
    saveButton: {
        padding: 200,
    },
    saveIcon: {
        padding: 30,
    }
})

export default MyListScreen;
