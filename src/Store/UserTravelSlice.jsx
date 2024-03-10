import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

export const fetchUserPosts = createAsyncThunk('post/fetchUserPosts', async () => {
    try {
        const accessToken = Cookies.get('accessToken');
        const response = await fetch("https://localhost:7189/api/TravellerPost/getUserTravellerPosts", {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
            },
            method: 'GET',
        });

        const data = await response.json();
        console.log(data["$values"]);
        return data["$values"];

    } catch (error) {
        console.log(error);
        throw error;
    }
});

const postSlice = createSlice({
    name: 'travelPost',
    initialState: {
        userPosts: [],
        status: 'idle',
        error: null,
    },
    reducers: {
        setUserPosts: (state, action) => {
            state.userPosts = action.payload;
        },
        getUserTravelPost: (state, action) => {
            state.userPosts = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserPosts.fulfilled, (state, action) => {
                state.status = 'idle';
                state.userPosts = action.payload;
            })
            .addCase(fetchUserPosts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchUserPosts.rejected, (state, action) => {
                state.status = 'idle';
                state.error = action.error.message;
            });
    },
});

export const { setUserPosts, getUserTravelPost } = postSlice.actions;

export default postSlice.reducer;