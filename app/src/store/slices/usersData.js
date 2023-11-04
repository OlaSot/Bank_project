import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "../../requests/users_req";

const initialState = {}

const usersDataSlice = createSlice({
    name: 'usersData',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.loading = true
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                return action.payload
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message;
            })
    }

})

export default usersDataSlice.reducer