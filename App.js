import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {initializeTtsListeners, playTTS} from './src/ttsListeners';

const App = () => {
  const [iptValue, setIptValue] = useState(
    'Hello World! This is text to speech implementation, Keep Coding!!!',
  );
  useEffect(() => {
    initializeTtsListeners();
  }, []);

  const startSpeaking = () => {
    playTTS(iptValue);
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          width: '100%',
          height: 300,
          backgroundColor: '#fff',
          padding: 30,
        }}>
        <Text style={{fontSize: 20, color: '#000', textAlign: 'center'}}>
          {'Text to Speech'}
        </Text>

        <TextInput
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            margin: 10,
            padding: 10,
            color: '#000',
          }}
          placeholder="Type something..."
          value={iptValue}
          onChangeText={text => setIptValue(text)}
        />

        <TouchableOpacity
          onPress={startSpeaking}
          style={{
            position: 'absolute',
            bottom: 70,
            alignSelf: 'center',
            backgroundColor: '#FF8A78',
            paddingHorizontal: 35,
            paddingVertical: 10,
            borderRadius: 8,
          }}>
          <Text style={{fontSize: 20, color: '#000'}}>Listen</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
