import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';
// import { getUserPosts } from './SenderPostSlice';

const API_URL = 'https://localhost:7189/api/TravellerPosts/createTravellerPost';

export const getPosts = createAsyncThunk('post/getAllTravellerPosts', async () => {
    try {
        const accessToken = Cookies.get('accessToken');
        const response = await fetch("https://localhost:7189/api/TravellerPost/getAllTravellerPosts", {
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

export const getUserPosts = createAsyncThunk('post/getAllTravellerPosts', async () => {
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

export const addPostAsync = createAsyncThunk('post/createTraveler', async (postData) => {
    try {
        const accessToken = Cookies.get('accessToken');
        const response = await fetch("https://localhost:7189/api/TravellerPosts/createTravellerPost", {
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
        const accessToken = Cookies.get('accessToken');
        const response = await fetch(`${"https://localhost:7189/api/TravellerPosts/updateTravellerPost"}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
            },
            body: JSON.stringify(newData),
        });
        if (!response.ok) {
            throw new Error('Failed to edit post!');
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
    name: 'travelPost',
    initialState: {
        posts: [],
        userPosts: [],
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
        getAllPosts: (state, action) => {
            state.posts = action.payload;
        },
        getUserPosts: (state, action) => {
            state.userPosts = action.payload;
        },
    },

    extraReducers: (builder) => {
        builder
            .addCase(getPosts.fulfilled, (state, action) => {
                state.status = 'idle';
                state.posts = action.payload;
            })

            .addCase(getPosts.pending, (state) => {
                state.status = 'loading';
            })

            .addCase(getPosts.rejected, (state, action) => {
                state.status = 'idle';
                state.error = action.error.message;
            })

            // -----------------------------------------------------

            // .addCase(getUserPosts.fulfilled, (state, action) => {
            //     state.status = 'idle';
            //     state.userPosts = action.payload;
            // })

            // .addCase(getUserPosts.pending, (state) => {
            //     state.status = 'loading';
            // })

            // .addCase(getUserPosts.rejected, (state, action) => {
            //     state.status = 'idle';
            //     state.error = action.error.message;
            // })

            // -----------------------------------------------------

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

export const { addPost, editPost, deletePost, getPost, getAllPosts } = postSlice.actions;

export default postSlice.reducer;