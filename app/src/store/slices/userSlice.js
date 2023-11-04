import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    email: null,
    token: null,
    id: null,
    name: null,
    surname: null,
    balance: null,
    photo: null,
    cards: null

}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action){
            state.email = action.payload.email
            state.token = action.payload.token
            state.id = action.payload.id
            state.name = action.payload.name
            state.surname = action.payload.surname
            state.balance = action.payload.balance
            state.photo = action.payload.photo
            state.cards = action.payload.cards
        },
        removeUser(state){
            state.email = null
            state.token = null
            state.id = null
        },
    }
})




export const { setUser, removeUser} = userSlice.actions

export default userSlice.reducer