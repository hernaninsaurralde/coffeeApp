
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';


const Stack = createNativeStackNavigator();

export default function App() {
return (
  <NavigationContainer >
    <Stack.Navigator initialRouteName='Login'
      screenOptions={{
      headerStyle: {
        backgroundColor: '#013338'
      },
      headerTintColor: '#E8D4AD', //esto solo para que recuerden la prop
      headerTitleAlign: 'center',
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 20,
      }
    }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />

    </Stack.Navigator>
  </NavigationContainer>
)
  
  
}

