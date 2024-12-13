import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SafeAreaProvider } from "react-native-safe-area-context";
import { MyContextProvider } from '../components/context'; // Import MyContextProvider
import { NavigationContainer } from '@react-navigation/native'; // Importação do NavigationContainer
import DownNavBar from "../components/downNavBar";
import Login from '@/components/pages/login';

export default function App() {
    return (
        <SafeAreaProvider>
            <View>
                <Login>
                    
                </Login>
            </View>
        </SafeAreaProvider>
    );
}
