import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking, Button } from 'react-native';
import CardContent from 'react-native-paper/lib/typescript/components/Card/CardContent';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export interface CardProps {
  nome: string;
  data: string;
  hora: string;
  endereco: string;
  onSave: (cardName: string) => void
}


const Card: React.FC<CardProps> = ({ nome, data, hora, endereco, onSave }) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <View style={styles.cardTitle}>
          <Text style={styles.titleText} numberOfLines={2} ellipsizeMode="tail">{nome}</Text>
          <TouchableOpacity style={styles.saveButton}>
            <TouchableOpacity onPress={() => onSave(nome)} style={{ backgroundColor: 'transparent' }}>
              <View style={{ backgroundColor: '#E3EB89', padding: 10 }} />
            </TouchableOpacity>
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
    height: 200,
  },
  cardContent: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
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
    flexWrap: 'wrap',
    maxWidth: '70%',
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
    maxWidth: '90%'
  },
  addressText: {
    fontSize: 16,
    color: '#555',
  },
});
export default Card;
