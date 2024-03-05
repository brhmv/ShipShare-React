import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

const API_URL = 'https://localhost:7189/api/TravellerPosts/createTravellerPost';

export const getPosts = createAsyncThunk('post/getAllTravellerPosts', async (_, { getState }) => {
    try {
        const state = getState();
        const accessToken = Cookies.get('accessToken');
        // const accessToken = state.auth.accessToken;
        const response = await fetch(API_URL, {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
            },
        });

        const data = await response.json();
        return data;
    } catch (error) {
        throw error;
    }
});


export const addPostAsync = createAsyncThunk('/createTraveler', async (postData) => {
    try {
        // const state = getState();
        // const accessToken = state.auth.accessToken;
        const accessToken = Cookies.get('accessToken');
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`,
            },
            body: JSON.stringify(postData),
        });

        if (!response.ok) {
            throw new Error('Failed to add post');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        throw error;
    }
});

export const editPostAsync = createAsyncThunk('post/editPostAsync', async ({ id, newData }) => {
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newData),
        });
        if (!response.ok) {
            throw new Error('Failed to edit post');
        }
        const data = await response.json();
        return { id, newData: data };
    } catch (error) {
        throw error;
    }
});

export const deletePostAsync = createAsyncThunk('post/deletePostAsync', async (postId) => {
    try {
        const response = await fetch(`${API_URL}/${postId}`, {
            method: 'DELETE',
        });
        if (!response.ok) {
            throw new Error('Failed to delete post');
        }
        return postId;
    } catch (error) {
        throw error;
    }
});

const postSlice = createSlice({
    name: 'post',
    initialState: {
        posts: [],
        status: 'idle',
        error: null,
    },
    reducers: {
        addPost: (state, action) => {
            state.posts.push(action.payload);
        },
        editPost: (state, action) => {
            const { id, newData } = action.payload;
            const postIndex = state.posts.findIndex(post => post.id === id);
            if (postIndex !== -1) {
                state.posts[postIndex] = { ...state.posts[postIndex], ...newData };
            }
        },
        deletePost: (state, action) => {
            const postId = action.payload;
            state.posts = state.posts.filter(post => post.id !== postId);
        },
        getPost: (state, action) => {
            state.posts = action.payload;
        },
    },

    extraReducers: (builder) => {
        builder
            .addCase(getPosts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getPosts.fulfilled, (state, action) => {
                state.status = 'idle';
                state.posts = action.payload;
            })
            .addCase(getPosts.rejected, (state, action) => {
                state.status = 'idle';
                state.error = action.error.message;
            })
            .addCase(addPostAsync.fulfilled, (state, action) => {
                state.posts.push(action.payload);
            })
            .addCase(editPostAsync.fulfilled, (state, action) => {
                const { id, newData } = action.payload;
                const index = state.posts.findIndex(post => post.id === id);
                if (index !== -1) {
                    state.posts[index] = { ...state.posts[index], ...newData };
                }
            })
            .addCase(deletePostAsync.fulfilled, (state, action) => {
                state.posts = state.posts.filter(post => post.id !== action.payload);
            });
    },
});

export const { addPost, editPost, deletePost, getPost } = postSlice.actions;

export default postSlice.reducer;
