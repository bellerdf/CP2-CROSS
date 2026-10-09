import { useState } from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

export default function App() {
  const [texto, setTexto] = useState('');
  const [itens, setItens] = useState([]);

  function adicionarItem() {
    if (texto.trim() !== '') {
      setItens([...itens, texto]);
      setTexto('');
    }
  }

  return (
    <View style={styles.fundoTela}>
      {/* Container principal que simula o ecrã do telemóvel */}
      <View style={styles.container}>
        <Text style={styles.titulo}>Lista de Compras</Text>

        {/* Usando Flexbox para deixar input e botão lado a lado */}
        <View style={styles.areaInput}>
          <TextInput
            style={styles.input}
            placeholder="Digite um novo item..."
            placeholderTextColor="#f48fb1"
            value={texto}
            onChangeText={setTexto}
          />
          <TouchableOpacity style={styles.botao} onPress={adicionarItem}>
            <Text style={styles.textoBotao}>Adicionar</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={itens}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.cartaoItem}>
              <Text style={styles.textoItem}>{item}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  fundoTela: {
    flex: 1,
    backgroundColor: '#fce4ec', // Fundo rosa muito claro
    alignItems: 'center',
  },
  container: {
    flex: 1,
    width: '100%',
    maxWidth: 450,
    backgroundColor: '#ffffff',
    padding: 24,
    marginTop: 40,
    marginBottom: 40,
    borderRadius: 24, // Bordas mais arredondadas e suaves
    // Sombras para dar destaque, agora com um tom rosado
    shadowColor: '#e91e63',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 8, // Sombra para Android
  },
  titulo: {
    fontSize: 32,
    fontWeight: '300', // Fonte mais fina
    fontStyle: 'italic', // Estilo itálico para fluidez
    letterSpacing: 1.5, // Espaçamento aberto entre letras
    marginBottom: 28,
    textAlign: 'center',
    color: '#d81b60' // Rosa escuro elegante
  },
  areaInput: {
    flexDirection: 'row',
    marginBottom: 24,
  },
  input: {
    flex: 1,
    borderWidth: 1.5,
    borderColor: '#f8bbd0', // Borda rosa claro
    borderRadius: 12, // Borda fluida
    padding: 12,
    fontSize: 16,
    backgroundColor: '#fff0f5', // Fundo 'lavender blush'
    marginRight: 10,
    color: '#880e4f', // Cor do texto ao digitar
  },
  botao: {
    backgroundColor: '#e91e63', // Rosa vibrante (Estilo Pink 500)
    justifyContent: 'center',
    paddingHorizontal: 22,
    borderRadius: 12,
  },
  textoBotao: {
    color: '#fff',
    fontWeight: '500', // Leve mas legível
    fontSize: 16,
    letterSpacing: 0.8,
  },
  cartaoItem: {
    backgroundColor: '#fff0f5', // Fundo do item rosado
    padding: 18,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#f8bbd0',
  },
  textoItem: {
    fontSize: 17,
    color: '#ad1457',
    fontWeight: '400',
    letterSpacing: 0.5,
  },
});