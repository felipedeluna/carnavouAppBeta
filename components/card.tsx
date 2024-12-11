import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface CardProps {
  nome: string;
  data: string;
  hora: string;
  endereco: string;
}

const Card: React.FC<CardProps> = ({ nome, data, hora, endereco }) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardTitle}>
        <Text style={styles.titleText}>{nome}</Text>
        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.saveButtonText}>Salvar</Text>
          <MaterialCommunityIcons name="plus" size={24} color="#45434C" />
        </TouchableOpacity>
      </View>
      <View style={styles.infoCard}>
        <View style={styles.infoItem}>
          <MaterialCommunityIcons name="calendar" size={24} color="#45434C" />
          <Text style={styles.infoText}>{data}</Text>
        </View>
        <View style={styles.infoItem}>
          <MaterialCommunityIcons name="clock-time-three-outline" size={24} color="#45434C" />
          <Text style={styles.infoText}>{hora}</Text>
        </View>
      </View>
      <View style={styles.addressCard}>
        <MaterialCommunityIcons name="map-marker-outline" size={24} color={"#45434C"} />
        <View style={styles.addressContent}>
          <TouchableOpacity>
            <Text
              style={styles.addressLink}
              onPress={() => Linking.openURL(`https://www.google.com/maps/search/${endereco}`)}
            >
              {endereco}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 10,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 5,
    elevation: 5,
  },
  cardTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  saveButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  saveButtonText: {
    fontSize: 16,
    color: '#45434C',
  },
  infoCard: {
    marginTop: 10,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  infoText: {
    marginLeft: 5,
    fontSize: 14,
    color: '#45434C',
  },
  addressCard: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  addressContent: {
    flexDirection: 'row',
    marginLeft: 5,
  },
  addressLink: {
    color: '#1E90FF',
    fontSize: 14,
  },
});

export default Card;
