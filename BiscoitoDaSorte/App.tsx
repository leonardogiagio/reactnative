import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function App() {

	const [img, setImg] = useState(require('./src/biscoito.png'));
	const [frase, setFrase] = useState('');

	const gerarFrase = () => {
		let frases = [
			"Não compense na ira o que lhe falta na razão.",
			"O que é o que é, não se vê, mas se sente?",
			"Quem tem boca vai a Roma.",
			"Mais vale um pássaro na mão do que dois voando.",
			"Água mole em pedra dura, tanto bate até que fura.",
			"Quem espera sempre alcança.",
			"Devagar se vai ao longe.",
			"Antes só do que mal acompanhado.",
			"Cada macaco no seu galho.",
			"Quem semeia ventos colhe tempestades."
		];
		let fraseAleatoria = Math.floor(Math.random() * frases.length);
		setFrase('"' + frases[fraseAleatoria] + '"');
		setImg(require('./src/biscoitoAberto.png'));
	};

	return(
		<View style={styles.container}>
			<Image 
			source={img}
			style={styles.img}
			/>

			<Text style={styles.textoFrase}>{frase}</Text>

			<TouchableOpacity style={styles.botao} onPress={gerarFrase}>
				<View style={styles.btnArea}>
					<Text style={styles.btnTexto}>Quebrar Biscoito</Text>
				</View>
			</TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	img: {
		width: 250,
		height: 250
	},
	textoFrase: {
		fontSize: 20,
		color: '#dd7b22',
		margin: 30,
		fontStyle: 'italic',
		textAlign: 'center'
	},
	botao: {
		width: 230,
		height: 50,
		borderWidth: 2,
		borderColor: '#dd7b22',
		borderRadius: 25
	},
	btnArea: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	btnTexto: {
		fontSize: 18,
		color: '#dd7b22',
		fontWeight: 'bold'
	}
});