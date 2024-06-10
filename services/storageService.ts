import AsyncStorage from '@react-native-async-storage/async-storage';

export const setAuthToken = async (token: string) => await AsyncStorage.setItem("authToken", token)
export const getAuthToken = async () => await AsyncStorage.getItem("authToken")
export const getOnBoard = async () => await AsyncStorage.getItem('ONBOARDED')
export const setOnBoard = async () => await AsyncStorage.setItem('ONBOARDED', 'true')