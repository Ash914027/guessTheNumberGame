// screens/GameScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Pressable, Alert } from 'react-native';
import Screentitle from '../components/screentitle';

export default function GameScreen({ userNumber, onGameOver }) {
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(100);
  const [guess, setGuess] = useState(generateGuess(1, 100));

  function generateGuess(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  useEffect(() => {
    if (guess === userNumber) {
      onGameOver(guess);
    }
  }, [guess, userNumber, onGameOver]);

  const nextGuess = (direction) => {
    if (
      (direction === 'lower' && guess <= userNumber) ||
      (direction === 'higher' && guess >= userNumber)
    ) {
      Alert.alert("Don't lie!", 'You know that is wrong...', [{ text: 'Sorry!', style: 'cancel' }]);
      return;
    }

    if (direction === 'lower') {
      setMax(guess - 1);
      setGuess(generateGuess(min, guess - 1));
    } else {
      setMin(guess + 1);
      setGuess(generateGuess(guess + 1, max));
    }
  };

  return (
    <>
      <Screentitle />
      <View style={styles.container}>
        <Text style={styles.guessText}>Is it {guess}?</Text>
        <View style={styles.buttonContainer}>
          <Pressable style={styles.buttonStyle} onPress={() => nextGuess('lower')}>
            <Text style={styles.buttonText}>Lower</Text>
          </Pressable>
          <Pressable style={styles.buttonStyle} onPress={() => nextGuess('higher')}>
            <Text style={styles.buttonText}>Higher</Text>
          </Pressable>
        </View>
        <Pressable style={styles.correctButton} onPress={() => onGameOver(userNumber)}>
          <Text style={styles.buttonText}>Correct</Text>
        </Pressable>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 40,
    margin: 50,
    alignItems: 'center',
    backgroundColor: 'pink',
    borderRadius: 10,
  },
  guessText: {
    fontSize: 28,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    width: 300,
    gap: 16,
    marginBottom: 20,
  },
  buttonStyle: {
    backgroundColor: '#ffa500',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    flex: 1,
  },
  correctButton: {
    backgroundColor: 'green',
    padding: 12,
    borderRadius: 8,
    width: 200,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
