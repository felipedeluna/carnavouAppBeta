import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import DownNavBar from "../components/downNavBar"
import {SafeAreaProvider} from "react-native-safe-area-context"
import { useFonts, Merriweather_400Regular, Merriweather_700Bold } from '@expo-google-fonts/merriweather';
import { ActivityIndicator, MD2Colors } from 'react-native-paper';

export default function App() {

  return (
        <SafeAreaProvider>
            <View style={{flex:1}}>
                <DownNavBar />
            </View>
        </SafeAreaProvider>  
    );
}