import React, { useContext, useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import MyContext from '../../components/context';
import { Appbar } from 'react-native-paper';
import Card, { CardProps } from '../card';
import AsyncStorage from '@react-native-async-storage/async-storage';


const MyListScreen = () => {
    const { savedCardIds } = useContext(MyContext);
    const [savedCardsData, setSavedCardsData] = useState<CardProps[]>([]);
    const onSave = (cardData: CardProps) => {
        // Implement logic to save card data
        saveCardToStorage(cardData);
    };


    const fetchSavedCards = async () => {
        const savedCardsData = await fetchCardsFromStorage(savedCardIds);
        setSavedCardsData(savedCardsData);
    }; const fetchCardsFromStorage = async (savedCardIds: string[]) => {
        const storageCards = await AsyncStorage.getItem('savedCards');
        const parsedCards = storageCards ? JSON.parse(storageCards) : {};

        const savedCardsData = savedCardIds.map((cardId) => {
            return parsedCards[cardId];
        });

        return savedCardsData;
    };
    const saveCardToStorage = async (cardData: any) => {
        const storageCards = await AsyncStorage.getItem('savedCards');
        const parsedCards = storageCards ? JSON.parse(storageCards) : {};

        parsedCards[cardData.id] = cardData;

        await AsyncStorage.setItem('savedCards', JSON.stringify(parsedCards));
    };

    useEffect(() => {
        fetchSavedCards();
    }, []);

    return (
        <View>
            <Appbar.Header>
                <Appbar.Content title="Minha Lista" style={{ alignItems: 'center' }} />
            </Appbar.Header>
            {savedCardsData.length > 0 ? (
                savedCardsData.map((cardData, index) => (
                    <Card
                        key={index}
                        nome={cardData.nome}
                        data={cardData.data}
                        hora={cardData.hora}
                        endereco={cardData.endereco}
                        onSave={() => { }} // Disable saving functionality for saved cards (optional)
                    />
                ))
            ) : (
                <Text>Nenhum bloco salvo ainda.</Text>
            )}
        </View>
    )
}
export default MyListScreen;