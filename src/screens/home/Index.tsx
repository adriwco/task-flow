import { View, Text, TextInput, TouchableOpacity, FlatList, Alert } from "react-native"
import { styles } from "./Styles"
import Participant from "../../components/participant/Participant"

const Home = () => {
  const participants = [
    {"id": 1, "nome": "Alice"},
    {"id": 2, "nome": "Bob"},
    {"id": 3, "nome": "Carol"},
    {"id": 4, "nome": "David"},
    {"id": 5, "nome": "Eve"},
    {"id": 6, "nome": "Frank"},
    {"id": 7, "nome": "Grace"},
    {"id": 8, "nome": "Hank"},
    {"id": 9, "nome": "Ivy"},
    {"id": 10, "nome": "Jack"},
    {"id": 11, "nome": "Katie"},
    {"id": 12, "nome": "Liam"},
    {"id": 13, "nome": "Mia"}
  ]

  function handleParticipantAdd(){
    if(participants.some(item => item.nome === "Mia")){
      return Alert.alert('Nome Existente.','O nome já existe.')
    }
  }
  
  function handleParticipantRemove(text: string){
    Alert.alert('Remover',`Confirmar remoção de "${text}"?`, [
      {
        text: 'Sim',
        onPress: () => Alert.alert('Deletado!')
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>To Do: Lists & Tasks</Text>
      <Text style={styles.eventDate}>Primeiro contato: react-native/ts.</Text>

      <View style={styles.form}>
        <TextInput 
          style={styles.input} 
          placeholder="Digite aqui..."
          placeholderTextColor="#6b6b6b"
        /> 

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
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
