import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function App() {
  const [time, setTime] = useState(0);
  const [timer, setTimer] = useState<number | null>(null);
  const [running, setRunning] = useState(false);
  const [ultimoTempo, setUltimoTempo] = useState(0);
  const [tempoMarcado, setTempoMarcado] = useState(0);

  const vai = () => {
    if (running) {
      if (timer) {
        clearInterval(timer);
        setTimer(null);
      }
      setRunning(false);
      return;
    }

    const id = setInterval(() => {
      setTime(t => t + 0.1);
    }, 100);

    setTimer(id);
    setRunning(true);
  };

  const limpar = () => {
    if (timer) {
      clearInterval(timer);
      setTimer(null);
    }

    setUltimoTempo(time);
    setTime(0);
    setTempoMarcado(0);
    setRunning(false);
  };

  const formatarTempo = (tempo: number) => {
    return tempo.toFixed(1);
  };

  const marcarTempo = () => {
    setTempoMarcado(time);
  };

  const renderTextoTempo = (strView: string, tempo: number) => {
    if (tempo <= 0) return null;
	
	return (
      <Text style={styles.ultimoTempo}>
        {tempo > 0 ? `${strView}: ${formatarTempo(tempo)}s` : ''}
      </Text>
    );
  };

  return (
    <View style={styles.container}>
      <Image source={require('./src/cronometro.png')} />

      <Text style={styles.timer}>{formatarTempo(time)}</Text>

      <View style={styles.btnArea}>
        <TouchableOpacity style={styles.btn} onPress={vai}>
          <Text style={styles.btnTexto}>{running ? 'PARAR' : 'VAI'}</Text>
        </TouchableOpacity>

        {time > 0 && (
          <TouchableOpacity style={styles.btn} onPress={limpar}>
            <Text style={styles.btnTexto}>LIMPAR</Text>
          </TouchableOpacity>
        )}
      </View>

      <View style={styles.btnAreaMarcar}>
        {time > 0 && (
          <TouchableOpacity style={styles.btn} onPress={marcarTempo}>
            <Text style={styles.btnTexto}>Marcar</Text>
          </TouchableOpacity>
        )}
      </View>

      {renderTextoTempo('Último tempo', ultimoTempo)}
      {renderTextoTempo('Tempo marcado', tempoMarcado)}
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
    fontStyle: 'italic',
  },
  btnAreaMarcar: {
    flexDirection: 'row',
    marginTop: 20,
    height: 40,
  },
});
