import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from 'axios'

const initialValue = {
    fullname: '',
    address: '',
    country: '',
    pincode: ''
}

export const registration = createAsyncThunk('/user/register', async (data) => {
        const response = await axios.post('http://localhost:8000/registration', data);
        return response.data?.data;
    }
)
const userSlice = createSlice({
    name: 'user',
    initialState: initialValue,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(registration.fulfilled, (state, action) => {
            // Add user to the state array
            console.log('inside builder ', state, action);
        })
    }
})

export default userSlice.reducer