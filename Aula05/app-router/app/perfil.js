import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
export default function perfil() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.curso}>Ciências da Computação</Text>
      <Text style={styles.turma}>2CCPG - 2026</Text>
      <Text style={styles.descricao}>Tecnologias Favoritas 🚀</Text>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 16 }}>

  <View style={{ flex: 1, height: 100, backgroundColor: '#1DB954', margin: 4, borderRadius: 8, justifyContent:'center', alignItems:'center' }}>
    <Text style={{ color: '#1C1C1C', fontWeight: 'bold' }}>Python</Text>
  </View>

  <View style={{ flex: 1, height: 100, backgroundColor: '#1DB954', margin: 4, borderRadius: 8, justifyContent:'center', alignItems:'center' }}>
    <Text style={{ color: '#1C1C1C', fontWeight: 'bold' }}>JavaScript</Text>
  </View>

  <View style={{ flex: 1, height: 100, backgroundColor: '#1DB954', margin: 4, borderRadius: 8, justifyContent:'center', alignItems:'center' }}>
    <Text style={{ color: '#1C1C1C', fontWeight: 'bold' }}>HTML</Text>
  </View>

</View>

      <TouchableOpacity onPress={() => router.back()}>
        <Text style={styles.voltar}>← Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container:  { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' },
  curso:     { fontSize: 28, fontWeight: 'bold', marginBottom: 12},
  turma: {fontSize: 28, fontWeight: 'bold', marginBottom: 12},
  descricao:  { fontSize: 16, color: '#555', marginBottom: 24 },
  voltar:     { fontSize: 16, color: '#E83D84', fontWeight: '600' },
});