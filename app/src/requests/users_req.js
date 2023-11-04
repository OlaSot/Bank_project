import { collection, getDocs } from "firebase/firestore";
import { db } from '../firebase'
import { createAsyncThunk } from "@reduxjs/toolkit";


export const fetchUsers = createAsyncThunk('usersData/fetchUsers', async () => {
    const usersCollection = collection(db, "users");
    const userSnapshot = await getDocs(usersCollection);
    const usersList = userSnapshot.docs.map(doc => doc.data());
    console.log(usersList);
    return usersList
})




export const getUsers = callback => {
    fetch('https://dummyjson.com/users')
        .then(res => res.json())
        .then(json => callback(json.users));
}



