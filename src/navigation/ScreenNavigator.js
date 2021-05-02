import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Colors from '../constants/colors';
import HomeScreen from '../screens/HomeScreen';
import AvailableAppointments from '../screens/AvailableAppointments';
import UserDetails from '../screens/UserDetails';

const Stack = createStackNavigator();

const headerConfig = {
  headerTitleStyle: {
    alignSelf: 'center',
  },
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
};

const ScreenNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={headerConfig} mode="modal">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Appointment App'}}
        />
        <Stack.Screen
          name="AvailableAppointments"
          component={AvailableAppointments}
          options={{title: 'Appointment App'}}
        />
        <Stack.Screen
          name="UserDetails"
          component={UserDetails}
          options={{title: 'Appointment App'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ScreenNavigator;
