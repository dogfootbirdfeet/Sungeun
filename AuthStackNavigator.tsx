import React from 'react';
import {StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../../screens/auth/LoginScreen';
import SignScreen from '../../screens/auth/SignScreen';
import {authNavigations} from '../../constants';
import AuthHomeScreen from '../../screens/auth/AuthHomeScreen';

export type AuthStackParamList = {
  [authNavigations.AUTH_HOME]: undefined; // 인증 홈 화면
  [authNavigations.LOGIN]: undefined; // 로그인 화면
  [authNavigations.SIGNUP]: undefined; // 가입 화면
};

const Stack = createStackNavigator<AuthStackParamList>();

function AuthStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor: 'white',
        },
        headerStyle: {
          shadowColor: 'gray',
          backgroundColor: 'white', // 헤더 배경색 (빨강)
        },
        headerTitleStyle: {
          fontSize: 15,
        },
        headerTintColor: 'black', // 헤더 글자색 (빨강)
      }}>
      <Stack.Screen
        name={authNavigations.AUTH_HOME}
        component={AuthHomeScreen}
        options={{
          headerTitle: ' ',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={authNavigations.LOGIN}
        component={LoginScreen}
        options={{
          headerTitle: '로그인하세요!',
        }}
      />
      <Stack.Screen
        name={authNavigations.SIGNUP}
        component={SignScreen}
        options={{
          headerTitle: '로그인',
        }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});

export default AuthStackNavigator;