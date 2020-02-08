import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home  from './Home'
import { View } from 'react-native';
import Restaurant from './restaurant'
// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//     </View>
//   );
// }

const Stack = createStackNavigator();

function App() {
  
  return (
    <NavigationContainer>
    <Stack.Navigator  screenOptions={{
        headerShown: false,
        headerTintColor: 'white',
        headerStyle: { backgroundColor: 'tomato' },
      }} >
      <Stack.Screen  name="Home"  component={Home} />
      <Stack.Screen  name="Restaurants"  component={Restaurant} />

    </Stack.Navigator>
  </NavigationContainer>
  );
}

export default App;