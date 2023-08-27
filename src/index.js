import { View, Text,StyleSheet } from 'react-native'
import React,{useState} from 'react'

const ChatGPT = () => {
    const[data,setData] = useState([]);
    const apiKey = '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';
    const apiUrl = 'hr'
    return (
    <View style={styles.container}>
      <Text style= {styles.title}>AI ChatBoT</Text>
    </View>
  )
}

export default ChatGPT

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fffcc9',   
      alignItems: 'center',

    },
    title:{
        fontSize:28,
        fontWeight:'bold',
        marginBottom:20,
        marginTop:70

    }
  });
  