import React, { createContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Card, { CardProps } from '../components/card';

interface MyContextType {
    savedCards: CardProps[];
    saveCard: (card: CardProps) => void;
    removeCard: (cardId: string) => void;
}

const MyContext = createContext<MyContextType | undefined>(undefined);  // Inicializa como undefined

export const MyContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [savedCards, setSavedCards] = useState<CardProps[]>([]);
    const [firstSave, setFirstSave] = useState(false);


    // Load saved cards on component mount
    useEffect(() => {
        const loadSavedCards = async () => {
            try {
                const storageData = await AsyncStorage.getItem('savedCards');
                if (storageData) {
                    const parsedCards = JSON.parse(storageData);
                    console.log("Cards carregados do AsyncStorage:", parsedCards);
                    setSavedCards(parsedCards);
                } else {
                    console.log("Nenhum card encontrado.");
                }
            } catch (error) {
                console.error("Erro ao carregar os cards:", error);
            }
        };
        loadSavedCards();
    }, []);

    // Save a card and update state
    const saveCard = async (card: CardProps) => {
        try {
            console.log("Função saveCard chamada!");
            setSavedCards((prevCards) => {
                const updatedCards = [...prevCards, card];
                console.log("Cards antes de salvar:", updatedCards);
                AsyncStorage.setItem('savedCards', JSON.stringify(updatedCards))
                    .then(() => console.log("Dados salvos no AsyncStorage"))
                    .catch((error) => console.error("Erro ao salvar no AsyncStorage:", error));
                return updatedCards;
            });
        } catch (error) {
            console.error("Erro ao salvar o card:", error);
        }
    };

    // Remove a card by cardId and update state
    const removeCard = async (cardId: string) => {
        try {
            const updatedCards = savedCards.filter((card) => card.nome !== cardId); // Remover o card
            setSavedCards(updatedCards); // Atualizar o estado imediatamente
            await AsyncStorage.setItem('savedCards', JSON.stringify(updatedCards)); // Atualizar AsyncStorage
        } catch (error) {
            console.error("Erro ao remover o card:", error);
        }
    };

    return (
        <MyContext.Provider value={{ savedCards, saveCard, removeCard }}>
            {children}
        </MyContext.Provider>
    );
};

export default MyContext;
