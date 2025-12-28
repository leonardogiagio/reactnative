import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function App() {
  const [time, setTime] = useState(0);
  const [timer, setTimer] = useState<number | null>(null);
  const [running, setRunning] = useState(false);
  const [btnText, setBtnText] = useState('VAI');
  const [ultimoTempo, setUltimoTempo] = useState(0);

  const vai = () => {
    if (running && timer) {
      clearInterval(timer);
      setTimer(null);
	  setBtnText('VAI');
    } else {
      const id = setInterval(() => {
        setTime(t => t + 0.1);
      }, 100);
      setTimer(id);
	  setBtnText('PARAR');
    }

    setRunning(!running);
  };

  const limpar = () => {
    if (timer) {
      clearInterval(timer);
      setTimer(null);
    }

    setTime(0);
    setRunning(false);
	setUltimoTempo(time);
	setBtnText('VAI');
  };
  return (
    <View style={styles.container}>
      <Image source={require('./src/cronometro.png')} />

      <Text style={styles.timer}>{time.toFixed(1)}</Text>

      <View style={styles.btnArea}>
        <TouchableOpacity style={styles.btn} onPress={vai}>
          <Text style={styles.btnTexto}>{btnText}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={limpar}>
          <Text style={styles.btnTexto}>LIMPAR</Text>
        </TouchableOpacity>
      </View>

	  <Text style={styles.ultimoTempo}>{ultimoTempo > 0 ? `Último tempo: ${ultimoTempo.toFixed(1)}s` : ''}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00aeef',
  },
  timer: {
    marginTop: -160,
    fontSize: 65,
    color: '#fff',
    fontWeight: 'bold',
  },
  btnArea: {
    flexDirection: 'row',
    marginTop: 70,
    height: 40,
  },
  btn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 40,
    margin: 17,
    borderRadius: 9,
  },
  btnTexto: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00aeef',
  },
  ultimoTempo: {
	marginTop: 40,
	fontSize: 25,
	color: '#fff',
	fontStyle: 'italic'
  },
});
