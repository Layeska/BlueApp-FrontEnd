import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider, Button } from 'native-base';
import { HandlerNavigation } from "./src/navigations"


export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <HandlerNavigation />
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
