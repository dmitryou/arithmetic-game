import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios';
import { Constants } from '../constants/Constants';

export const Intro = () => {

	const [title, setTitle] = useState('loading ...');

	useEffect(() => {
		axios.get(Constants.indexUrl).then(response => {
			// Since we get html, 
			//some strings manipulations to extract the text
			let text = response.data.toString();
			text = text.substring(text.indexOf("<p>") + 3);
			text = text.substring(0, text.indexOf("</p>"));
			setTitle(text)
		})
	}, []);

	return (
		<View style={styles.container}>
			<Text style={styles.text}>{'Arithmetic game'}</Text>
			<Text style={styles.text}>{title}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center'
	},
	text: {
		textAlign: 'center',
		paddingHorizontal: 16,
	},
});