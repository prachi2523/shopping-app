import AsyncStorage from '@react-native-async-storage/async-storage';

export interface UserProps {
    firstName: string,
    email: string,
    lastName: string
}

export const setAuthToken = async (token: string) => await AsyncStorage.setItem("authToken", token)
export const getAuthToken = async () => await AsyncStorage.getItem("authToken")
export const getOnBoard = async () => await AsyncStorage.getItem('ONBOARDED')
export const setOnBoard = async () => await AsyncStorage.setItem('ONBOARDED', 'true')
export const setUser = async (user: UserProps) => await AsyncStorage.setItem('user', JSON.stringify(user))
export const getuser = async () => await AsyncStorage.getItem('user')