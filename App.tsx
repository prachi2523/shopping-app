/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler'
import React, { useEffect, useState } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Provider, useSelector } from 'react-redux';
import store from './redux/store';
import NavigationStack from './src/navigations/NavigationStack';
import { getAuthToken, getuser } from './services/storageService';
import { ToastProvider } from 'react-native-toast-notifications';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { AuthProvider } from './src/context/AuthContexts';

function App(): React.JSX.Element {

  return (
    <AuthProvider>
      <Provider store={store}>
        <ToastProvider duration={2000} successColor='#5cc565' successIcon={<Ionicons name="checkmark-done-circle" size={20} />}>
          <NavigationStack />
        </ToastProvider>
      </Provider>
    </AuthProvider>
  )

}

export default App;
