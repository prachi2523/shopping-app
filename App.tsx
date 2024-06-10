/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler'
import React, { useEffect, useState } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import store from './redux/store';
import NavigationStack from './src/navigations/NavigationStack';
import { getAuthToken } from './services/storageService';


function App(): React.JSX.Element {
  const [isAuth, setIsAuth] = useState<string | null>(null)

  useEffect(() => {
    getAuth();
  }, [])

  const getAuth = async () => {
    const token = await getAuthToken();
    if (token) {
      setIsAuth(token)
    }
  }

  return (
    <Provider store={store}>
      <NavigationStack isAuth={isAuth} />
    </Provider>
  )

}

export default App;
