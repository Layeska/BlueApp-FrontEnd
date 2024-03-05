import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider, Button } from 'native-base';

export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Text>Hola Mundo D:</Text>
        <Button>XXX</Button>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
