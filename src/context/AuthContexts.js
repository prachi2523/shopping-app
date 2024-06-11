import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useEffect, useState } from "react";
import { getAuthToken, getOnBoard } from "../../services/storageService";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuth, setIsAuth] = useState(null);
    const [onboarded, setOnboarded] = useState(true);
    const [isLoading, setIsLoading] = useState(true)

    const isLoggendIn = async () => {
        try {
            let token = await getAuthToken();
            setIsAuth(token)
            setIsLoading(false)
        } catch (error) {

        }
    }

    const getState = async () => {
        const onboarded = await getOnBoard();
        setOnboarded(onboarded);
    };

    useEffect(() => {
        isLoggendIn();
        getState();
    }, [])

    return (
        <AuthContext.Provider value={{ isAuth, onboarded, setIsAuth, isLoading, setOnboarded }}>
            {children}
        </AuthContext.Provider>
    )
}