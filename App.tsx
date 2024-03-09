import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Game } from './src/screens/Game';
import { Intro } from './src/screens/Intro';

export default function App() {

  const [isIntro, setIsIntro] = useState(true);

  const changeScreens = () => {
    setIsIntro(!isIntro);
  }

  const renderIntro = () => {
    return (
      <>
        <Intro />
        <Button title={'Start game'} onPress={changeScreens}></Button>
      </>
    );
  }

  const renderGame = () => {
    return (
      <>
        <Game />
        <Button title={'Back to intro'} onPress={changeScreens}></Button>
      </>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {
        isIntro === true ? renderIntro() : renderGame()}
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
