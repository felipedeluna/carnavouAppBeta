import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import DownNavBar from "../components/downNavBar"
import Login from "../components/pages/login"
import Cadastro from "../components/pages/cadastro"
import {SafeAreaProvider} from "react-native-safe-area-context"


export default function App() {

  return (
        <SafeAreaProvider>
            <View style={{flex:1}}>
                <Login></Login>
            </View>
        </SafeAreaProvider>  
    );
}