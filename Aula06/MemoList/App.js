import { useState, useEffect } from 'react';
import { View, TextInput, Button, FlatList, StyleSheet, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TarefaItem from './components/TarefaItem';

export default function App() {
  const [tarefas, setTarefas] = useState([]);
  const [texto, setTexto] = useState('');
  // 📖 Carregar ao abrir o app
  useEffect(() => {
    carregarTarefas();
  }, []);
  const carregarTarefas = async () => {
    const dados = await AsyncStorage.getItem('tarefas');
    if (dados) setTarefas(JSON.parse(dados));
  };
  const salvarTarefas = async (lista) => {
    await AsyncStorage.setItem('tarefas', JSON.stringify(lista));
  };
  const adicionarTarefa = () => {
    if (!texto.trim()) return;
    const nova = { id: Date.now().toString(), texto, concluida: false };
    const novaLista = [...tarefas, nova];
    setTarefas(novaLista);
    salvarTarefas(novaLista);
    setTexto('');
  };
  const removerTarefa = (id) => {
    const novaLista = tarefas.filter((t) => t.id !== id);
    setTarefas(novaLista);
    salvarTarefas(novaLista);
  };
  const tarefaConcluida = (id) => {
  const novaLista = tarefas.map((t) =>
    t.id === id ? { ...t, concluida: !t.concluida } : t
  );

  setTarefas(novaLista);
  salvarTarefas(novaLista); 
};
const limparTudo = async () => {
  setTarefas([]); // limpa da tela
  await AsyncStorage.removeItem('tarefas'); // limpa do storage
};
const pendentes = tarefas.filter(t => !t.concluida).length;
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>🎯MemoList - Lista de Tarefas</Text>
      <Text style={styles.contador}> 🚨{pendentes} Tarefas pendentes </Text>
      <TextInput
        value={texto}
        onChangeText={setTexto}
        placeholder="Nova tarefa..."
        style={styles.input}
      />
      <View style={styles.botaoAdicionar}>
        <Button title="Adicionar ➕" onPress={adicionarTarefa} />
      </View>
       <View style={styles.botaoLimpar}>
        <Button title="Limpar Tudo 🔄" onPress={limparTudo} />
      </View>
      <FlatList
        data={tarefas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TarefaItem tarefa={item} onRemover={removerTarefa} onConcluir={tarefaConcluida} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 40, paddingTop: 60, backgroundColor: '#FFEFD5'},
  input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 8,
           padding: 10, marginBottom: 10, fontSize: 16 },
  botaoAdicionar: {marginBottom: 10},
  botaoLimpar: {marginBottom: 10},
  titulo: {fontSize: 24, marginBottom: 20, fontWeight: 'bold', textAlign: 'center',  color: '#1E90FF',},
  contador: {color: '#000', fontSize: 16, marginBottom: 15, fontWeight: 'bold', backgroundColor: '#F08080', borderRadius: 8,},
});