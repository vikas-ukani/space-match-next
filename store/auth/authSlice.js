import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getAuthToken = createAsyncThunk(
    'auth/getAuthToken',
    async () => {
        return {
            token: localStorage.getItem('token'),
            token_type: localStorage.getItem('token_type'),
            user: localStorage.getItem('userDetails')
        }
    }
)

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        token: '',
        token_type: '',
        userDetails: {}
    },
    reducers: {
        setAuth: (state, action) => {
            state.token = action.payload.token
            state.token_type = action.payload.token_type
            state.userDetails = JSON.stringify(action.payload.user_data)
            localStorage.setItem('token', state.token)
            localStorage.setItem('token_type', state.token_type)
            localStorage.setItem('userDetails', state.userDetails)
        },
        removeToken: (state, action) => {
            state.token = ''
            state.token_type = ''
            state.userDetails = ''

            localStorage.removeItem('token')
            localStorage.removeItem('token_type')
            localStorage.removeItem('userDetails')

        }
    },
    extraReducers: {
        [getAuthToken.fulfilled]: (state, action) => {
            return action.payload
        }
    }
})

export const { setAuth, removeToken } = authSlice.actions
export default authSlice.reducer