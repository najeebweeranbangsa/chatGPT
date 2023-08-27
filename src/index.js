import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, TouchableOpacity } from 'react-native';
import axios from 'axios';

const ChatGPT = () => {
  const [data, setData] = useState([]);
  const apiKey = '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';
  const apiUrl = 'https://api.openai.com/v1/engines/text-davinci-002/completions';
  const [textInput, setTextInput] = useState('');

  const handleSend = async () => {
    const prompt = textInput; // Fixed typo: changed "promt" to "prompt"
    const response = await axios.post(
      apiUrl,
      {
        prompt: prompt,
        max_tokens: 1024, // Fixed typo: changed "=" to ":"
        temperature: 0.5,
      },
      {
        headers: {
          'Content-Type': 'application/json', // Fixed typo: changed 'content-Type' to 'Content-Type'
          'Authorization': `Bearer ${apiKey}`, // Fixed typo: changed single quotes to backticks
        },
      }
    );
    const text = response.data.choices[0].text;
    setData([...data, { type: 'user', text: textInput }, { type: 'bot', text: text }]); // Fixed typo: changed "'use'" to "'user'"
    setTextInput('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>AI ChatBot</Text> {/* Fixed typo: changed "AI ChatBoT" to "AI ChatBot" */}
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        style={styles.body}
        renderItem={({ item }) => (
          <View style={{ flexDirection: 'row', padding: 10 }}> {/* Fixed typo: changed "view" to "View" */}
            <Text style={{ fontWeight: 'bold', color: item.type === 'user' ? 'green' : 'red' }}>
              {item.type === 'user' ? 'User' : 'Bot'} {/* Fixed typo: changed "'Ninza'" to "'User'" */}
            </Text>
            <Text style={styles.bot}>{item.text}</Text>
          </View>
        )}
      />
      <TextInput
        style={styles.input} // Fixed typo: removed colon after "style"
        value={textInput}
        onChangeText={(text) => setTextInput(text)}
        placeholder="Ask me anything"
      />
      <TouchableOpacity style={styles.button} onPress={handleSend}>
        <Text style={styles.buttonText}>Let's Go</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ChatGPT;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffcc9',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 70,
  },
  body: {
    backgroundColor: '#fffcc9',
    width: '100%', // Changed '102%' to '100%'
    margin: 10,
  },
  bot: {
    fontSize: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    width: '90%',
    height: 60,
    marginBottom: 10,
    borderRadius: 10,
  },
  button: {
    backgroundColor: 'yellow',
    width: '90%',
    height: 60,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 25,
    fontWeight: 'bold', // Fixed typo: added comma after 'bold'
    color: 'blue',
  },
});
