import * as React from 'react'
import {StyleSheet, View, Button, Text, Image, ScrollView, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import HomeScreen from './home'
import StatisticsScreen from './statistics'

import {
  AdMobBanner,
} from 'expo-ads-admob';

const Stack = createStackNavigator()

function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='HomeScreen' component={HomeScreen}
          options={({ navigation, route }) => ({
            title: "Home",
            // headerTitle: props => <LogoTitle {...props} />,
            headerRight: ()=> (
            <Button
              onPress={() => navigation.navigate('StatisticsScreen')}
              title="Statistics"
            />
            ),
          })}
        />
      <Stack.Screen
        name='StatisticsScreen'
        component={StatisticsScreen}
        options={{ title: 'Statistics' }}
      />
      </Stack.Navigator>
      <AdMobBanner
        bannerSize="fullBanner"
        adUnitID="ca-app-pub-3940256099942544/6300978111" // Test ID, Replace with your-admob-unit-id
        servePersonalizedAds // true or false
        />
    </NavigationContainer>
  )
}

export default MainStackNavigator
