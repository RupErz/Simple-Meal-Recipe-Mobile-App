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
      <StatusBar style='light'/>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#351401'
            },
            headerTintColor: 'white', // Color of the text in the header
            contentStyle: { // Style for the content of the screen
              backgroundColor: 'pink'
            },
            headerTitleAlign: 'center'
          }}
        >

          {/* Allow us to register a screen within a Navigator */}
          <Stack.Screen 
            name="MealCategories" 
            component={CategoriesScreen} 
            options={{
              title: 'All Categories',
            }}
          /> 

          <Stack.Screen 
            name='MealOverview' 
            component={MealsOverviewScreen} 
            // options={({ route, navigation }) => {
            //   const { categoryId } = route.params
            //   return {
            //     title: categoryId
            //   }
            // }}  

          />
            
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
