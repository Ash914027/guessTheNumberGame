// screens/StartScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Pressable } from 'react-native';
import Screentitle from '../components/screentitle';

export default function StartScreen({ onConfirm }) {
  const [number, setNumber] = useState('');

  return (
    <>
      <Screentitle />
      <View style={styles.container}>
        <TextInput
          style={styles.textInputStyle}
          keyboardType="number-pad"
          maxLength={2}
          value={number}
          onChangeText={setNumber}
        />
        <View style={styles.buttonContainer}>
          <Pressable style={styles.buttonStyle} onPress={() => setNumber('')}>
            <Text style={styles.buttonText}>Reset</Text>
          </Pressable>
          <Pressable
            style={styles.buttonStyle}
            onPress={() => {
              const parsed = parseInt(number);
              if (!isNaN(parsed)) onConfirm(parsed);
            }}>
            <Text style={styles.buttonText}>Confirm</Text>
          </Pressable>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    backgroundColor: 'pink',
    margin: 170,
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderRadius: 8,
    elevation: 5,
  },
  textInputStyle: {
    height: 48,
    width: 200,
    backgroundColor: '#fffbe7',
    borderBottomColor: 'red',
    borderBottomWidth: 2,
    marginBottom: 20,
    fontSize: 24,
    textAlign: 'center',
    borderRadius: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    width: 340,
    gap: 16,
  },
  buttonStyle: {
    backgroundColor: '#ff69b4',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    flex: 1,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
