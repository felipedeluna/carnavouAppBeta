import * as React from 'react';
import { View, Image, StyleSheet, Text, ScrollView, Linking, Alert} from 'react-native';

export default function sobre() {

    const handlePress = async (url: string) => {
        console.log('log1: ', url);
        try {
          const supported = await Linking.canOpenURL(url);
          console.log('log2: ', supported);
          if (supported) {
            await Linking.openURL(url);
            console.log('log3');
          } else {
            Alert.alert('log4:', url);
          }
        } catch (error) {
          if (error instanceof Error) {
            console.error('Erro ao abrir URL:', error.message);
            Alert.alert('Erro ao abrir a URL:', error.message);
          } else {
            console.error('Erro inesperado:', error);
            Alert.alert('Erro inesperado ao abrir a URL.');
          }
        }
      };
      
      

    return (
        <View>
            <View style={styles.header}>
                <Image
                    source={require('../../assets/images/carnavou-logo-nav.png')}
                />
            </View>
            <ScrollView style={{ marginBottom: 60 }}>
            <View style={[styles.mainView]}>
                <View>
                    <Text style={[styles.mainTitle, styles.boldText, styles.serifText]}>Sobre nós</Text>
                    <Text>Nossa fanfarra de dois apaixonados pelo carnaval.</Text>
                </View>
            </View>
            <View>
                <View style={[styles.mainView]}>
                    <View style={[styles.viewDetail]}>
                        <Image source={require('../../assets/images/vitor.jpg')} style={[styles.imgFormat]} />
                        <View style={[styles.subTitle]}>
                            <Text style={[styles.boldText, styles.pName, styles.serifText]}>Vitor Ruis</Text>
                            <Text style={[styles.pWork, styles.serifText]}>Desenvolvedor Full Stack</Text>
                        </View>
                    </View>
                    <View style={[styles.addHeight]}></View>
                    <Text style={[styles.pDesc]}>
                        Eu sou uma pessoa que está em transição de carreira e buscando uma oportunidade na área de desenvolvimento de software. Sou daqueles que se adaptam rapidamente às mudanças e adoram estar por dentro das novidades do mercado, sempre buscando aprender mais. {'\n'}{'\n'}
                        Tenho a curiosidade como algo que me move, e estou sempre buscando soluções criativas para as tarefas que me são atribuídas. Com uma atitude positiva, eu me comprometo em fazer o melhor para contribuir para o sucesso dos projetos. Enfim, sou uma pessoa apaixonada por tecnologia, cinema e fotografia, pronta para aprender e crescer. {'\n'}{'\n'}
                        Atualmente, estou estudando desenvolvimento web, utilizando HTML, CSS, JavaScript, mySQL, PHP e Golang, e estou particularmente interessado em aprofundar meus conhecimentos em e aprender React, next.js e Node.js.{'\n'}{'\n'}
                        <View style={[styles.linksView]}>
                            <Text onPress={() => handlePress('https://www.instagram.com/dimiyk/')} style={[styles.linkPerfil]}>Meu instagram</Text> 
                            <Text onPress={() => handlePress('https://www.linkedin.com/in/dimittrisouza171b121a5/')} style={[styles.linkPerfil]}>Meu Linkedin</Text>
                        </View>
                    </Text>

                    <View style={[styles.addHeight]}></View>
                    <View style={[styles.addHeight]}></View>
                    <View style={[styles.addHeight]}></View>
                    <View style={[styles.addHeight]}></View>

                    <View style={[styles.viewDetail]}>
                        <Image source={require('../../assets/images/mari.jpg')} style={[styles.imgFormat]} />
                        <View style={[styles.subTitle]}>
                            <Text style={[styles.boldText, styles.pName, styles.serifText]}>Mari do Brasil</Text>
                            <Text style={[styles.pWork, styles.serifText]}>Product Designer</Text>
                        </View>
                    </View>
                    <View style={[styles.addHeight]}></View>
                    <Text style={[styles.pDesc]}>
                        Sou uma product designer brasiliense atualmente trabalhando para a fintech will bank. Moro em São Paulo e sou uma amante do carnaval e do samba. {'\n'}{'\n'}
                        Tenho como objetivo construir experiências que conectem as necessidades das pessoas usuárias às necessidades do negócio. {'\n'}{'\n'}
                        Gosto de conduzir pesquisas, acompanhar a performance do produto e utilizar esses e outros dados para decisões em um trabalho colaborativo.{'\n'}{'\n'}
                        <View style={[styles.linksView]}>
                            <Text onPress={() => handlePress('https://www.instagram.com/dimiyk/')} style={[styles.linkPerfil]}>Meu instagram</Text>
                            <Text onPress={() => handlePress('https://www.linkedin.com/in/dimittrisouza171b121a5/')} style={[styles.linkPerfil]}>Meu Linkedin</Text>
                        </View>
                    </Text>
                </View>
            </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({

    header: {
        backgroundColor: '#EBFF01',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        padding: 20
    },
    mainView: {
        padding: 10
    },
    mainTitle: {
        fontSize: 30,
        paddingTop: 20,
        color: '#682B7D'
    },
    whiteText: {
        color: '#FFFFFF'
    }
    ,
    boldText: {
        fontWeight: 'bold'
    },
    serifText: {
        fontFamily: 'serif'
    },
    pName: {
        fontSize: 20
    },
    pWork: {
        color: '#000000',
        justifyContent: 'flex-start'
    },
    pDesc: {
        color: '#000000'
    },
    viewDetail: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        color: '#682B7D'
    },
    subTitle: {
        marginLeft: 10,
        padding: 10,

    },
    imgFormat: {
        width: 100,
        height: 100,
        borderRadius: 50
    },
    addHeight: {
        paddingTop: 15
    },
    linksView: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        
    },
    linkPerfil: {
        color: '#000000',
        fontWeight: 'bold',
        fontStyle: 'italic',
        textDecorationLine: 'underline',
        paddingRight: 20
    }
});