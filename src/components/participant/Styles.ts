import { StyleSheet } from "react-native"
export const styles = StyleSheet.create({
  container:{
    marginBottom: 10,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  name:{
    flex: 1,
    color: '#fff',
    padding: 16,
    borderRadius: 5,
    backgroundColor: '#1f1e25',
    height: 56,
  },
  button:{
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: '#e23c44',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#131016',
    fontSize: 24,
  },
})