import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, Button, TextInput } from 'react-native';
import axios from 'axios';
import { Constants } from '../constants/Constants';


export const Game = () => {

  const [expression, setExpression] = useState('');
  const [error, setError] = useState('');
  const [instruction, setInstruction] = useState('');
  const [score, setScore] = useState('');
  const [value, setValue] = useState('');

  useEffect(() => {
    // First time game starter
    axios.post(Constants.gameUrl).then(response => {
      setExpression(response.data.expression);
    })
  }, []);

  const onNext = () => {
    // Build form data, otherwise POST on server fails
    let formData = new FormData();
    formData.append('text', value);
    // Headers
    axios.post(Constants.gameUrl, formData, {
      headers: Constants.formHeaders
    }).then(response => {
      // Run game logic to manipulate the state of component
      gameLogic(response.data);
    });
  }

  const gameLogic = (data: any) => {
    if (data?.instruction) {
      setInstruction(data.instruction);
    } else {
      setInstruction('');
    }
    if (data?.expression) {
      setExpression(data.expression);
      if (!data?.score && !data?.instruction) {
        setValue('')
      }
    } else {
      setExpression('');
    }
    if (data?.error) {
      setError(data.error);
    } else {
      setError('');
    }
    if (data?.score) {
      setScore(data.score);
    } else {
      setScore('');
    }
  }

  const setInput = (value: string) => {
    console.log(value);
    setValue(value);
  }

  return (
    <>
      <Text>GAME ON :</Text>
      <Text>{instruction}</Text>
      <Text style={styles.error} >{error}</Text>
      <Text>{expression}</Text>
      <Text>{score}</Text>
      <TextInput
        style={styles.input}
        onChangeText={(v) => setInput(v)}
        value={value}
      />
      <Button title={'Next'} onPress={onNext}></Button>
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    width: '80%',
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  error: {
    color: 'red',
  },
});