// components/TarefaItem.js

import { View, Text, TouchableOpacity, StyleSheet, Switch  } from 'react-native';

export default function TarefaItem({ tarefa, onRemover, onConcluir  }) {
  return (
    <View style={styles.container}>
      <Text style={[ styles.texto,tarefa.concluida && styles.concluida]}>{tarefa.texto}</Text>
      <Switch value={tarefa.concluida}onValueChange={() => onConcluir(tarefa.id)}/>
      <TouchableOpacity onPress={() => onRemover(tarefa.id)}>
        <Text style={styles.remover}>❌</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
    marginVertical: 4,
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  texto: { fontSize: 16 },
  remover: { fontSize: 18 },
  concluida: {color: 'green',},
});