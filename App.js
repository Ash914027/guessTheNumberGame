import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import StartScreen from './screens/StartScreen';
import GameScreen from './screens/gameScreen';
import GameOverScreen from './screens/GameoverScreen';

export default function App() {
  const [step, setStep] = React.useState(1);
  const [userNumber, setUserNumber] = React.useState(null);

  return (
    <LinearGradient colors={['#a1c4fd', '#c2e9fb']} style={{ flex: 1 }}>
      {step === 1 && (
        <StartScreen
          onConfirm={(number) => {
            setUserNumber(number);
            setStep(2);
          }}
        />
      )}
      {step === 2 && (
        <GameScreen
          userNumber={userNumber}
          onGameOver={(num) => {
            setUserNumber(num);
            setStep(3);
          }}
        />
      )}
      {step === 3 && (
        <GameOverScreen
          number={userNumber}
          onRestart={() => {
            setStep(1);
            setUserNumber(null);
          }}
        />
      )}
    </LinearGradient>
  );
}
