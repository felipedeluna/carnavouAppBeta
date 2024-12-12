import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react';
import { useRouter } from 'expo-router';  // Import the useRouter hook
import DownNavBar from '../downNavBar';

const App = () => {
    const [screen, setScreen] = useState('login');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    
    const router = useRouter();  // Initialize the router

    const handleLogin = async () => {
        try {
            const response = await fetch('https://carnavou.onrender.com/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });
    
            const result = await response.json();
    
            if (result.ok) {
                Alert.alert('Sucesso', result.message);
                router.push('/downNavBar');  // Correct path to DownNavBar screen
            } else {
                Alert.alert('Erro', result.message || 'Erro ao realizar login.');
            }
        } catch (error) {
            Alert.alert('Erro', 'Falha na comunicação com o servidor.');
            console.error(error);
        }
    };
    

    const handleRegister = async () => {
        if (password !== confirmPassword) {
            Alert.alert('Erro', 'As senhas não coincidem.');
            return;
        }

        try {
            const response = await fetch('https://carnavou.onrender.com/auth/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });

            const result = await response.json();

            if (result.ok) {
                Alert.alert('Sucesso', 'Cadastro realizado com sucesso!');
                setScreen('login');
            } else {
                Alert.alert('Erro', result.message || 'Erro ao realizar cadastro.');
            }
        } catch (error) {
            Alert.alert('Erro', 'Falha na comunicação com o servidor.');
            console.error(error);
        }
    };

    if (screen === 'signup') {
        return (
            <View>
                <View style={styles.header}>
                    <Image source={require('../../assets/images/carnavou-logo-nav.png')} />
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
                            value={email}
                            onChangeText={(text) => setEmail(text)}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Senha"
                            secureTextEntry
                            value={password}
                            onChangeText={(text) => setPassword(text)}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Confirme sua Senha"
                            secureTextEntry
                            value={confirmPassword}
                            onChangeText={(text) => setConfirmPassword(text)}
                        />
                    </View>
                    <Text>{'\n'}</Text>
                    <View style={styles.btnView}>
                        <TouchableOpacity style={styles.button} onPress={handleRegister}>
                            <Text style={styles.textBtnCadastrar}>Cadastrar</Text>
                        </TouchableOpacity>
                    </View>
                    <Text>{'\n'}</Text>
                    <TouchableOpacity onPress={() => setScreen('login')}>
                        <Text style={[styles.boldText, styles.backToLogin]}>Voltar para Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    return (
        <View>
            <View style={styles.header}>
                <Image source={require('../../assets/images/carnavou-logo-nav.png')} />
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
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Senha"
                        secureTextEntry
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                    />
                </View>
                <Text>{'\n'}</Text>
                <View style={styles.btnView}>
                    <TouchableOpacity style={styles.button} onPress={handleLogin}>
                        <Text style={styles.textBtnEntrar}>Entrar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => setScreen('signup')}>
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
        padding: 40,
    },
    header: {
        backgroundColor: '#EBFF01',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    input: {
        width: '100%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
        backgroundColor: 'white',
    },
    btnView: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    button: {
        borderRadius: 5,
        borderColor: 'purple',
        borderWidth: 2,
        backgroundColor: 'purple',
        width: 120,
        alignItems: 'center',
    },
    textBtnEntrar: {
        color: 'white',
        fontSize: 18,
        padding: 2,
    },
    textBtnCadastrar: {
        color: 'white',
        fontSize: 18,
        padding: 2,
    },
    instructionsText: {
        fontFamily: 'serif',
        fontSize: 20,
    },
    boldText: {
        fontWeight: 'bold',
    },
    backToLogin: {
        textAlign: 'center',
        fontSize: 16,
        color: 'purple',
    },
});

export default App;


// import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
// import React from 'react'

// const Login = () => {

//     return (
//         <View>
//             <View style={styles.header}>
//                 <Image
//                     source={require('../../assets/images/carnavou-logo-nav.png')}
//                 />
//             </View>

//             <View style={styles.mainView}>
//                 <Text style={styles.instructionsText}>Preencha seus dados de acesso</Text>
//                 <Text>{'\n'}</Text>
//                 <View>
//                     <TextInput
//                         style={styles.input}
//                         placeholder="Email"
//                         keyboardType="email-address"
//                         autoCapitalize="none"
//                     />
                    
//                     <TextInput
//                         style={styles.input}
//                         placeholder="Senha"
//                         secureTextEntry
//                     />
//                 </View>
//                 <View>
//                     <TouchableOpacity>
//                         <Text style={[styles.boldText, styles.forgotPw]}>Esqueci minha senha</Text>
//                     </TouchableOpacity>
//                 </View>
//                 <Text>{'\n'}</Text>
//                 <View style={styles.btnView}>

//                     <TouchableOpacity style={styles.button}>
//                         <Text style={styles.textBtnEntrar}>Entrar</Text>
//                     </TouchableOpacity>

//                     <TouchableOpacity style={styles.button}>
//                         <Text style={styles.textBtnCadastrar}>Cadastrar</Text>
//                     </TouchableOpacity>

//                 </View>
//                 <Text>{'\n'}</Text>
                
//             </View>

//         </View>
//     )
// }

// const styles = StyleSheet.create({
//     mainView: {
//         padding: 40
//     },
//     header: {
//         backgroundColor: '#EBFF01',
//         justifyContent: 'center',
//         alignItems: 'center',
//         padding: 20
//     },
//     whiteText: {
//         color: 'white'
//     }
//     ,
//     boldText: {
//         fontWeight: 'bold'
//     },
//     serifText: {
//         fontFamily: 'serif'
//     },
//     input: {
//         width: '100%',
//         height: 40,
//         borderColor: 'gray',
//         borderWidth: 1,
//         borderRadius: 5,
//         padding: 10,
//         marginBottom: 10,
//         backgroundColor: 'white'
//     },
//     btnView: {
//         flexDirection: 'row',
//         justifyContent: 'space-evenly'
//     },
//     button: {
//         borderRadius: 5,
//         borderColor: 'purple',
//         borderWidth: 2,
//         backgroundColor: 'purple',
//         width: 100,
//         alignItems: 'center'
//     },
//     textBtnEntrar: {
//         color: 'white',
//         fontSize: 18,
//         padding: 2
//     },
//     textBtnCadastrar: {
//         color: 'white',
//         fontSize: 18,
//         padding: 2
//     },
//     instructionsText: {
//         fontFamily: 'serif',
//         fontSize: 20
//     },
//     forgotPw: {
//         fontSize: 12
//     }
// })

// export default Login