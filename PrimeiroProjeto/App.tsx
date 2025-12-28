import React, {useState} from 'react';
import { View, Text, Image, Button, TextInput, StyleSheet } from 'react-native';
 
function App() {
	const [nome, setNome] = useState('Leonardo');
	const [inputTexto, setInputTexto] = useState('');

	const alterarNome = (novoNome: string) => {
		setNome(novoNome);
	}

	const pegarTexto = (texto: string) => {
		if(texto == '') return setInputTexto('');
		setInputTexto('Bem vindo: ' + texto);
	}

	return(
		<View style={styles.container}>
			<Text>Hello, World!</Text>
			<Text style={styles.textoPrincipal}>
				Primeiro App em React Native
			</Text>
			<Text style={styles.textoSujeito}>
				Sujeito Programador
			</Text>

			<Logo largura={300}  altura={300} />

			<Button 
				title="Alterar nome"
				onPress={() => alterarNome('Leonardo Giagio')}
			/>

			<Text style={{ fontSize: 18 }}>Meu nome é {nome}</Text>

			<View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around', marginTop: 20 }}>
				<View style={{width: 50, height: 50, backgroundColor: 'red'}}></View>
				<View style={{width: 50, height: 50, backgroundColor: 'green'}}></View>
				<View style={{width: 50, height: 50, backgroundColor: 'yellow'}}></View>
			</View>

			<View style={{ marginTop: 50, padding: 10 }}>
				<TextInput
					style={{ height: 40, borderColor: 'gray', borderWidth: 1}}
					placeholder="Digite seu nome"
					underlineColorAndroid="transparent"
					onChangeText={pegarTexto}
				/>

				<Text style={{ fontSize: 18, marginTop: 10 }}>
					{inputTexto}
				</Text>
			</View>
		</View>
	);
}

export default App;

function Logo(props: { largura: number; altura: number; }) {
	const img = 'https://reactnative.dev/img/tiny_logo.png';

	return(
		<Image 
		source={{ uri: img }}
		style={{ width: props.largura, height: props.altura }}
		/>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#F5FCFF',
	},
	textoPrincipal: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	textoSujeito: {
		textAlign: 'center',
		color: '#ff0000',
		marginBottom: 5,
	},
})