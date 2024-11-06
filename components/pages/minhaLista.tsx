import * as React from 'react';
import { View } from 'react-native';
import { Appbar } from 'react-native-paper';
import Card from '../card';

export default function minhaLista(){
    return(
        <View>
        <Appbar.Header>
            <Appbar.Content title="Minha Lista" style={{alignItems:'center'} }/>
        </Appbar.Header>
        <Card/>
        </View>
    )
}