//여러  화면을 출력하기 위한 파일경로
import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthHomeScreen from '../front/src/screens/auth/AuthHomeScreen';
import AuthStackNavigator from './src/navigations/stack/AuthStackNavigator';
import MapHomeScreen from './src/screens/map/MapHomeScreen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

function App() {
  return (
    //화면 출력하기
    <NavigationContainer>
    <AuthStackNavigator />
  </NavigationContainer>

  );
}

export default App;