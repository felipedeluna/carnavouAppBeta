import * as React from 'react';
import { View, StyleSheet, Image, ImageBackground, ScrollView, } from 'react-native';
import { Text, TextInput, Button, Icon } from 'react-native-paper';
import Card from '../card';
import axios from 'axios';

const INITIAL_REGION = {
    latitude: -23.5226251,
    longitude: -46.7591236,
    latitudeDelta: 0.2,
    longitudeDelta: 0.2
};

export default function Home() {
    const [text, setText] = React.useState("");
    const [blocos, setBlocos] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState<string | null>(null);

    const fetchBlocos = async (searchTerm: string) => {
        setLoading(true);
        setError(null); // Limpar erros anteriores
        try {
            console.log(`Iniciando a busca pelos blocos com o termo: ${searchTerm}`);
            const response = await axios.get(`https://carnavou.onrender.com/blocos/nomes?nomes=${searchTerm}`);
            console.log('Dados recebidos:', response.data);
            setBlocos(response.data); // Atualiza o estado com os dados recebidos
        } catch (error) {
            console.error('Erro ao fazer a requisição:', error);
            setError('Erro ao carregar os blocos');
        } finally {
            setLoading(false);
        }
    };

    React.useEffect(() => {
        fetchBlocos(''); // Carrega os blocos ao inicializar
    }, []);

    return (
        <View>
            <View style={styles.header}>
                <Image source={require('../../assets/images/carnavou-logo-nav.png')} />
            </View>
            <ScrollView style={{ marginBottom: 60 }}>
                <ImageBackground
                    source={require('../../assets/images/banner-home.png')}
                    style={styles.imageBackground}
                    resizeMode="cover"
                >
                    <View style={styles.container}>
                        <Text style={styles.whiteText}>
                            Eu quero é botar meu bloco na rua!
                        </Text>
                    </View>
                </ImageBackground>

                <View style={styles.mainContainer}>
                    <TextInput
                        value={text}
                        onChangeText={setText}
                        placeholder="Pesquise pelo nome do bloco..."
                        style={styles.searchInput}
                    />
                    <Button
                        onPress={() => fetchBlocos(text)}
                        icon="text-search"
                        mode="contained"
                    >
                        Pesquisar
                    </Button>

                    {loading && <Text>Carregando blocos...</Text>}
                    {error && <Text style={styles.errorText}>{error}</Text>}

                    {blocos.length > 0 ? (
                        blocos.map((bloco: any, index: number) => (
                            <Card
                                key={index}
                                nome={bloco.Nome}
                                data={bloco.Data}
                                hora={bloco.Concentracao}
                                endereco={bloco.Local}
                            />
                        ))
                    ) : (
                        !loading && <Text>Nenhum bloco encontrado.</Text>
                    )}
                </View>
            </ScrollView>
        </View>
    );
}


const styles = StyleSheet.create({
    header: {
        backgroundColor: '#EBFF01',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
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
    imageBackground: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 200
    },
    container: {
        padding: 20,
    },
    mainContainer: {
        margin: 8,
        marginBottom: 40
    },
    searchContainer: {
        display: 'flex',
        gap: 10,
        marginBottom: 60
    },
    searchInput: {
        backgroundColor: 'transparent',
    },
    searchButtonsContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 20,
    },
    primaryButton: {
        borderRadius: 10,
        backgroundColor: '#682B7D'
    },
    filterButton: {
        flex: 1,
        borderRadius: 10,
    },
    agendaText: {
        color: '#8D8A92',
        fontFamily: 'serif',
        fontSize: 32,
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: 38,
        marginBottom: 30
    },
    mapsContainer: {
        paddingHorizontal: 10,
        paddingVertical: 60,
        backgroundColor: '#E3EB89',
        gap: 18
    },
    errorText: {
        color: 'red',
        fontSize: 16,
        textAlign: 'center',
    }
})
