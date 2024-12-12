import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking, Button } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export interface CardProps {
  nome: string;
  data: string;
  hora: string;
  endereco: string;
  onSave?: (card: { nome: string; data: string; hora: string; endereco: string }) => void;
  onRemove?: () => void;
}

const Card: React.FC<CardProps> = ({ nome, data, hora, endereco, onSave, onRemove }) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <View style={styles.cardTitle}>
          <Text style={styles.titleText} numberOfLines={2} ellipsizeMode="tail">{nome}</Text>

          {/* Botão de Salvar */}
          {onSave && (
            <TouchableOpacity
              style={styles.saveButton}
              onPress={() => {
                console.log("Botão de salvar clicado!");
                onSave({ nome, data, hora, endereco });
              }}
            >
              <MaterialCommunityIcons name="plus" size={24} color="#45434C" style={styles.saveIcon} />
            </TouchableOpacity>
          )}
          {/* Botão de Remover */}
          {onRemove && (
            <TouchableOpacity
              style={styles.saveButton}
              onPress={() => {
                console.log("Botão de remover clicado!");
                if (onRemove) {
                  onRemove();
                }
              }}
            >
              <MaterialCommunityIcons name="trash-can" size={24} color="#45434C" />
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.infoCard}>
          <MaterialCommunityIcons name="calendar" size={24} color="#45434C" />
          <Text style={[styles.infoText, { marginRight: 40 }]}>{data}</Text>
          <MaterialCommunityIcons name="clock-time-three-outline" size={24} color="#45434C" />
          <Text style={styles.infoText}>{hora}</Text>
        </View>
        <View style={styles.addressCard}>
          <MaterialCommunityIcons name="map-marker-outline" size={24} color={"#45434C"} />
          <TouchableOpacity onPress={() => Linking.openURL(`https://www.google.com/maps/search/${endereco}`)}>
            <Text style={styles.addressLink}>{endereco}</Text>
          </TouchableOpacity>
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
    height: 220,
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
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 4,
    maxWidth: '20%',
  },
  icon: {
    width: 24,
    height: 24,
  },
  saveIcon: {
    paddingHorizontal: 8,
  },
  infoCard: {
    flexDirection: 'row',
    gap: 8,
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
