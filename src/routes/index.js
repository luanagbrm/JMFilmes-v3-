import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Details from '../screens/Details';


export default function Routes(){
    
    const Stack = createStackNavigator();
    
    return(
        <NavigationContainer>
            
            <Stack.Navigator initialRouteName='home'>

                <Stack.Screen 
                    name="home" 
                    component={Home}
                    options={{
                        title: 'Início',
                        headerShown: false
                    }
                }
                />
                <Stack.Screen
                    name="details"
                    component={Details}
                />
            
            </Stack.Navigator>
        
        </NavigationContainer>
    )
}