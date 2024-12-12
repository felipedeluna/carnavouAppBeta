import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SafeAreaProvider } from "react-native-safe-area-context";
import { MyContextProvider } from '../components/context'; // Import MyContextProvider
import { NavigationContainer } from '@react-navigation/native'; // Importação do NavigationContainer
import DownNavBar from "../components/downNavBar";

export default function App() {
    return (
        <SafeAreaProvider>
            <MyContextProvider>
                <NavigationContainer>
                    <View style={{ flex: 1 }}>
                        {/* Aqui você deve ter seu navegador, como Stack ou BottomTab */}
                        <DownNavBar />
                    </View>
                </NavigationContainer>
            </MyContextProvider>
        </SafeAreaProvider>
    );
}
