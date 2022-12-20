import { Store } from './src/redux/store';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FetchScreen from './src/screens/FetchScreen';
import HomeScreen from './src/screens/HomeScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
      <Provider store={Store}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown:false}}>
            {/* <Stack.Screen name="OnBoard" component={OnBoardScreen}/> */}
            <Stack.Screen name="Fetch" component={FetchScreen}/>
            <Stack.Screen name="Home" component={HomeScreen}/>
            {/* <Stack.Screen name="Form" component={FormScreen}/>
            <Stack.Screen name="Profile" component={ProfileScreen}/>
            <Stack.Screen name="Tablou" component={InfiniteScroll}/> */}
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
  );
}
