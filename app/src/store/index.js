import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slices/userSlice'
import usersDataReducer from './slices/usersData'

export const store = configureStore({
    reducer: {
        user: userReducer,
        usersData: usersDataReducer
    }
})