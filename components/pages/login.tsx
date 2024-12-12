import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

const Login = () => {
    return (
        <View>
            <View style={styles.header}>
                <Image
                    source={require('../../assets/images/carnavou-logo-nav.png')}
                />
            </View>

            <View style={styles.mainView}>
                <Text style={styles.instructionsText}>Preencha seus dados de acesso</Text>
                <Text>{'\n'}</Text>
                <View>
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                    
                    <TextInput
                        style={styles.input}
                        placeholder="Senha"
                        secureTextEntry
                    />
                </View>
                <View>
                    <TouchableOpacity>
                        <Text style={[styles.boldText, styles.forgotPw]}>Esqueci minha senha</Text>
                    </TouchableOpacity>
                </View>
                <Text>{'\n'}</Text>
                <View style={styles.btnView}>

                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.textBtnEntrar}>Entrar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.textBtnCadastrar}>Cadastrar</Text>
                    </TouchableOpacity>

                </View>
                <Text>{'\n'}</Text>
                
            </View>

        </View>
    )
}

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
    }
    ,
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
        justifyContent: 'space-evenly'
    },
    button: {
        borderRadius: 5,
        borderColor: 'purple',
        borderWidth: 2,
        backgroundColor: 'purple',
        width: 100,
        alignItems: 'center'
    },
    textBtnEntrar: {
        color: 'white',
        fontSize: 18,
        padding: 2
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
    forgotPw: {
        fontSize: 12
    }
})

export default Login