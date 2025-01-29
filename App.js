import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverviewScreen from './screens/MealsOverviewScreen';

export default function App() {
  
  // Now Stack is an object hold 2 property as a COMPONENTS
  const Stack = createNativeStackNavigator()

  return (
    <>
      <StatusBar style='dark'/>
      <NavigationContainer>
        <Stack.Navigator>

          {/* Allow us to register a screen within a Navigator */}
          <Stack.Screen name="MealCategories" component={CategoriesScreen} /> 

          <Stack.Screen name='MealOverview' component={MealsOverviewScreen} />
            
        </Stack.Navigator>
      </NavigationContainer>
    </>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
