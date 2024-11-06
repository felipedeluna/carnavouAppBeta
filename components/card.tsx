import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Card = () => {
  return (
    <View style={styles.card}>
      <View style={styles.cardTitle}>
        <Text style={styles.titleText}>Belas & Empreendedoras</Text>
        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.saveButtonText}>Salvar</Text>
          <MaterialCommunityIcons name="plus" size={24} color="#45434C" />
        </TouchableOpacity>
      </View>
      <View style={styles.infoCard}>
        <View style={styles.infoItem}>
          <MaterialCommunityIcons name="calendar" size={24} color="#45434C" />
          <Text style={styles.infoText}>18/02</Text>
        </View>
        <View style={styles.infoItem}>
          <MaterialCommunityIcons name="clock-time-three-outline" size={24} color="#45434C" />
          <Text style={styles.infoText}>13h</Text>
        </View>
      </View>
      <View style={styles.addressCard}>
        <MaterialCommunityIcons name="map-marker-outline" size={24} color={"#45434C"}/>
        <View style={styles.addressContent}>
            <TouchableOpacity>
                <Text
                    style={styles.addressLink}
                    onPress={() => Linking.openURL('https://www.google.com/maps/search/R. Borges de Figueiredo')}
                >
                    R. Borges de Figueiredo
                </Text>
            </TouchableOpacity>
            <Text style={styles.addressText}>Mooca</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    card: {
      backgroundColor: '#fff',
      borderRadius: 8,
      padding: 16,
      marginBottom: 16,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
      elevation: 5,
    },
    cardTitle: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 16,
    },
    titleText: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#682B7D',
    },
    saveButton: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#E3EB89',
      paddingHorizontal: 8,
      paddingVertical: 4,
      borderRadius: 4,
    },
    saveButtonText: {
      fontSize: 16,
      color: '#333',
      marginRight: 4,
    },
    icon: {
      width: 24,
      height: 24,
    },
    infoCard: {
      flexDirection: 'row', 
      gap: 64,
      marginBottom: 16,
    },
    infoItem: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    infoText: {
      fontSize: 16,
      marginLeft: 8,
      color: '#555',
    },
    addressCard: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    addressContent: {
      marginLeft: 8,
    },
    addressLink: {
      color: '#000',
      fontSize: 16,
      textDecorationLine: 'underline',
    },
    addressText: {
      fontSize: 16,
      color: '#555',
    },
  });
  
export default Card;
