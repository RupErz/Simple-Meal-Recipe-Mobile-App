import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealsDetailScreen from './screens/MealsDetailScreen';
import FavoriteScreen from './screens/FavoriteScreen';
import { Ionicons } from '@expo/vector-icons'

export default function App() {
  
  // Now Stack is an object hold 2 property as a COMPONENTS
  const Stack = createNativeStackNavigator()
  const Drawer = createDrawerNavigator()

  const DrawerNavigator = () => {
    return (
      <Drawer.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#FF6F61'
          },
          headerTintColor: 'white', // Color of the text in the header
          sceneStyle: { // Style for the content of the screen
            backgroundColor: 'pink'
          },
          headerTitleAlign: 'center',
          drawerContentStyle: {
            backgroundColor: 'pink'
          },
          drawerInactiveTintColor: 'black',
          drawerActiveTintColor: 'white',
        }}
      >
        {/* Default Screen for Drawer Navigator */}
        <Drawer.Screen 
          name='Categories'
          component={CategoriesScreen}
          options={
            {
              title: 'All Categories',
              drawerIcon: ({ size, color }) => {
                return (
                  <Ionicons name='list' color={color} size={size} />
                )
              }
            }
          }
        />

        <Drawer.Screen 
          name='FavoriteScreen'
          component={FavoriteScreen}
          options={{
            drawerIcon: ({ size, color }) => {
              return (
                <Ionicons name='star' color={color} size={size} />
              )
            }
          }}
        />
      </Drawer.Navigator>
    )
  }

  return (
    <>
      <StatusBar style='light'/>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#FF6F61'
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
            // Drawer Navigation nested within Stack Navigation
            component={DrawerNavigator} 
            options={{
              headerShown: false
            }}
          /> 

          <Stack.Screen 
            name='MealOverview' 
            component={MealsOverviewScreen} 
          />

          <Stack.Screen
            name='MealDetail'
            component={MealsDetailScreen}
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
