import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ApiService from "../services/ApiService";
import axios from "axios";
import { getAuthToken, setAuthToken, setUser } from "../services/storageService";

interface LoginParam {
    username: string,
    password: string
}

export const authenticate = createAsyncThunk(
    "user/authenticate",
    async ({ username, password }: LoginParam) => {
        try {
            const response = await axios.post("https://dummyjson.com/auth/login", { username, password });
            const data = await response.data;
            return data;
        } catch (err: any) {
            console.log("Axios Error", err)
        }
    }
);

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        loading: false,
        error: null,
        data: null
    },

    reducers: {
        logOut: () => {
            setAuthToken("");
        }
    },
    extraReducers: (builder) => {
        builder.addCase(authenticate.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(authenticate.rejected, (state, action) => {
            state.loading = false;
            if (action.payload) {
            } else {

            }
        });
        builder.addCase(authenticate.fulfilled, (state, action) => {
            state.loading = false;
            console.log(action.payload, "PAYLOAD")
            if (action.payload.token) {
                setUser({ firstName: action.payload.firstName, lastName: action.payload.lastName, email: action.payload.email })
                setAuthToken(action.payload.token)
            }
        });
    },
});

export const { logOut } = authSlice.actions

export default authSlice.reducer;