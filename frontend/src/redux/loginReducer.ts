import { createSlice } from "@reduxjs/toolkit";

export interface LoginInitialState {
    isLogin: boolean
}
const initialState: LoginInitialState = {
    isLogin: false
}

export const loginSlice = createSlice ({
    name: 'login',
    initialState,
    reducers: {
        setLogin: (state) => {
                state.isLogin = !state.isLogin;
        } 
    }
})

export const { setLogin } = loginSlice.actions;
export default loginSlice.reducer;