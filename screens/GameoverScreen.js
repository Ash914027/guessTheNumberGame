// screens/GameOverScreen.js

import { View, Text, StyleSheet, Pressable } from 'react-native';
import Screentitle from '../components/screentitle';

export default function GameOverScreen({ number, onRestart }) {
  return (
    <>
      <Screentitle />
      <View style={styles.container}>
        <Text style={styles.text}>Game Over!</Text>
        <Text style={styles.text}>Number was: {number}</Text>
        <Pressable style={styles.button} onPress={onRestart}>
          <Text style={styles.buttonText}>Play Again</Text>
        </Pressable>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 100,
    padding: 40,
    backgroundColor: '#dcedc1',
    borderRadius: 10,
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#008b8b',
    padding: 14,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
