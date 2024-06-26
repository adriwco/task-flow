import { Text, View, TouchableOpacity } from "react-native"
import { styles } from "./Styles"

type Props = {
  name: string;
  onRemove: () => void;
}

const Participant = ({name, onRemove}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>

      <TouchableOpacity style={styles.button} onPress={onRemove}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Participant
