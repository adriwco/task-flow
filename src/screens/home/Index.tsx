import { View, Text, TextInput, TouchableOpacity, FlatList, Alert } from "react-native"
import { styles } from "./Styles"
import Participant from "../../components/participant/Participant"
import { useState  } from "react"

const Home = () => {
  const [lists, setLists] = useState<{ id: number; nome: string; }[]>([]);
  const [texto, setTexto] = useState<string>('');

  function generateNewId(): number {
    const maxId = lists.length > 0 ? Math.max(...lists.map(list => list.id)) : 0;
    return maxId === -Infinity ? 0 : maxId + 1;
  }

  function handleParticipantAdd(){
    if(texto != ''){
      if (lists.some(item => item.nome === texto)) {
        return Alert.alert('Nome Existente.','O nome já existe.');
      }
      setLists(prevState => [...prevState, { id: generateNewId(), nome: texto }]);
      setTexto('');
    }
  }
  
  function handleParticipantRemove(text: string){
    Alert.alert('Remover',`Confirmar remoção de "${text}"?`, [
      {
        text: 'Sim',
        onPress: () => setLists(prevState => prevState.filter(list => list.nome !== text))
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>To Do: Listss & Tasks</Text>
      <Text style={styles.eventDate}>Primeiro contato: react-native/ts.</Text>

      <View style={styles.form}>
        <TextInput 
          style={styles.input} 
          placeholder="Digite aqui..."
          placeholderTextColor="#6b6b6b"
          onChangeText={setTexto}
          value={texto}
        /> 

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={lists}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
            <Participant 
              key={item.id} 
              name={item.nome} 
              onRemove={()=> handleParticipantRemove(item.nome)} 
            />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={()=>(
          <Text style={styles.listEmptyText}>Digite um texto...</Text>
        )}
      />
        
    </View>
  )
}

export default Home
