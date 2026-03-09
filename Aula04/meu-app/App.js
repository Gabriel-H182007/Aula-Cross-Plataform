import { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
 
export default function HidratacaoApp() {
  const [copos, setCopos] = useState(0);
  const [meta, setMeta] = useState(false);
  useEffect(() => {
      if(copos === 8) setMeta('🏆 Meta do dia atingida!');
  }, [copos]);
  return (
    <View style={[styles.container, copos >= 8 && { backgroundColor: 'green' }]}>
      <Text style={styles.meta}>{meta}</Text>
      <Text style={styles.counter}>🥤{copos}</Text>
      <TouchableOpacity style={styles.btn} onPress={() => setCopos(copos + 1)}>
        <Text style={styles.btnText}>Adicionar copo de água</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={() => setCopos(0)}>
        <Text style={styles.btnText}>Zerar o dia</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#FFDAB9' },
  meta:       { color: '#4B0082', fontSize: 25, marginBottom: 12 },
  counter:   { color: '#fff', fontSize: 80, fontWeight: 'bold' },
  btn:       { marginTop: 24, backgroundColor: '#00008B', paddingHorizontal: 40, paddingVertical: 16, borderRadius: 50 },
  btnText:   { color: '#fff', fontSize: 25, fontWeight: 'bold' },
});