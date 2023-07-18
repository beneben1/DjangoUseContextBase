import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { logoutUser, myLogin } from './LoginAPI';



export interface LoginState {
    status: "logged" | "notlogged";
    user: string;
    pwd: string;
    accessToken : string | null;

}

const initialState: LoginState = {
    status: 'notlogged',
    user: "",
    pwd: "",
    accessToken : sessionStorage.getItem('token'),
};


export const loginAsync = createAsyncThunk(
    'login/loginUser',
    async (cred: { user: string, pwd: string }) => {
        const response = await myLogin(cred.user, cred.pwd);
        return response.data;

    }
);

export const logoutAsync = createAsyncThunk("login/logoutUser", async () => {
    const response = await logoutUser();
    return response;
});

export const LoginSlice = createSlice({
    name: 'login',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginAsync.fulfilled, (state, action) => {
                state.status = 'logged';
                state.accessToken = action.payload.access;
                sessionStorage.setItem('token', action.payload.access);
            });
    },
});
export const selectLoginStatus = (state: RootState) => state.login.status;
export const selectLoginUser = (state: RootState) => state.login.user;
export const selectAccessToken = (state: RootState) => state.login.accessToken;

export default LoginSlice.reducer;

