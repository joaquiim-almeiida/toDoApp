import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/screens/Home';
import Detalhes from './src/screens/Detalhes';
import Editar from './src/screens/Editar';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            component={Home}
            name="HOME_SCREEN"
            options={{ title: 'Minhas Tarefas' }}
          />
          <Stack.Screen
            component={Detalhes}
            name="DETAIL_SCREEN"
            options={{ title: 'Detalhes' }}
          />
          <Stack.Screen
            component={Editar}
            name="EDIT_SCREEN"
            options={{ title: 'Editar' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
