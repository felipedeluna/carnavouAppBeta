import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

const Signup = () => {
    // Declaração de estados para armazenar os valores dos campos
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    return (
        <View>
            <View style={styles.header}>
                <Image
                    source={require('../../assets/images/carnavou-logo-nav.png')}
                />
            </View>

            <View style={styles.mainView}>
                <Text style={styles.instructionsText}>Preencha seus dados para cadastro</Text>
                <Text>{'\n'}</Text>
                <View>

                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        value={email} // Valor do campo de email
                        onChangeText={(text) => setEmail(text)} // Atualiza o estado do email
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Senha"
                        secureTextEntry
                        value={password} // Valor do campo de senha
                        onChangeText={(text) => setPassword(text)} // Atualiza o estado da senha
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Confirme sua Senha"
                        secureTextEntry
                        value={confirmPassword} // Valor do campo de confirmação de senha
                        onChangeText={(text) => setConfirmPassword(text)} // Atualiza o estado da confirmação de senha
                    />
                </View>
                <Text>{'\n'}</Text>
                <View style={styles.btnView}>

                    <TouchableOpacity style={styles.button} onPress={() => {
                        if (password === confirmPassword) {
                            console.log('Nome:', name);
                            console.log('Email:', email);
                            console.log('Senha:', password);
                        } else {
                            console.log('As senhas não coincidem.');
                        }
                    }}>
                        <Text style={styles.textBtnCadastrar}>Cadastrar</Text>
                    </TouchableOpacity>

                </View>
                <Text>{'\n'}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    mainView: {
        padding: 40
    },
    header: {
        backgroundColor: '#EBFF01',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    },
    whiteText: {
        color: 'white'
    },
    boldText: {
        fontWeight: 'bold'
    },
    serifText: {
        fontFamily: 'serif'
    },
    input: {
        width: '100%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
        backgroundColor: 'white'
    },
    btnView: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    button: {
        borderRadius: 5,
        borderColor: 'purple',
        borderWidth: 2,
        backgroundColor: 'purple',
        width: 120,
        alignItems: 'center'
    },
    textBtnCadastrar: {
        color: 'white',
        fontSize: 18,
        padding: 2
    },
    instructionsText: {
        fontFamily: 'serif',
        fontSize: 20
    },
});

export default Signup;
