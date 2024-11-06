import * as React from 'react';
import { View } from 'react-native';
import { Appbar } from 'react-native-paper';
import Card from '../card';

export default function sobre(){
    return(
        <View>
        <Appbar.Header>
            <Appbar.Content title="Sobre" style={{alignItems:'center'} }/>
        </Appbar.Header>
        </View>
    )
}