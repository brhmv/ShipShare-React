import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

export const fetchUserPosts = createAsyncThunk('post/fetchUserTravellerPosts', async () => {
    try {
        const accessToken = Cookies.get('accessToken');
        const response = await fetch("https://localhost:7189/api/TravellerPost/getUserTravellerPosts", {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
            },
            method: 'GET',
        });

        const data = await response.json();

        return data["$values"];

    } catch (error) {
        console.log(error);
        throw error;
    }
});

export const fetchUserSenderPosts = createAsyncThunk('post/fetchUserSenderPosts', async () => {
    try {
        const accessToken = Cookies.get('accessToken');
        const response = await fetch("https://localhost:7189/api/SenderPost/getUserSenderPosts", {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
            },
            method: 'GET',
        });

        const data = await response.json();
        return data["$values"];

    } catch (error) {
        console.log(error);
        throw error;
    }
});

export const updateSenderPost = createAsyncThunk(
    'post/updateSenderPost',
    async ({ postId, postData }) => {
        try {
            const accessToken = Cookies.get('accessToken');
            const response = await fetch(`https://localhost:7189/api/SenderPost/updateSenderPost/${postId}`, {
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                },
                method: 'PUT',
                body: postData,
            });

            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error updating sender post:', error);
            throw error;
        }
    }
);

export const updateTravellerPost = createAsyncThunk(
    'post/updateSenderPost',
    async ({ postId, postData }) => {
        try {
            const accessToken = Cookies.get('accessToken');
            const response = await fetch(`https://localhost:7189/api/TravellerPost/updateTravellerPost/${postId}`, {
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                },
                method: 'PUT',
                body: postData,
            });

            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error updating sender post:', error);
            throw error;
        }
    }
);

export const deleteSenderPost = createAsyncThunk(
    'post/deleteSenderPost',
    async (postId) => {
        try {
            const accessToken = Cookies.get('accessToken');
            const response = await fetch(`https://localhost:7189/api/SenderPost/deleteSenderPost/${postId}`, {
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                },
                method: 'DELETE',
            });

            return postId;
        } catch (error) {
            console.error('Error deleting sender post:', error);
            throw error;
        }
    }
);

export const deleteTravellerPost = createAsyncThunk(
    'post/deleteTravellerPost',
    async (postId) => {
        try {
            const accessToken = Cookies.get('accessToken');
            const response = await fetch(`https://localhost:7189/api/TravellerPost/deleteTravellerPost/${postId}`, {
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                },
                method: 'DELETE',
            });

            return postId;
        } catch (error) {
            console.error('Error deleting sender post:', error);
            throw error;
        }
    }
);

const postSlice = createSlice({
    name: 'userPosts',
    initialState: {
        userSenderPosts: [],
        userTravellerPosts: [],
        status: 'idle',
        error: null,
    },
    reducers: {
        setUserSenderPosts: (state, action) => {
            state.userSenderPosts = action.payload;
        },
        setUserTravelerPosts: (state, action) => {
            state.userTravellerPosts = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserSenderPosts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchUserSenderPosts.fulfilled, (state, action) => {
                state.status = 'idle';
                state.userSenderPosts = action.payload;
            })

            .addCase(fetchUserSenderPosts.rejected, (state, action) => {
                state.status = 'idle';
                state.error = action.error.message;
            })

            .addCase(fetchUserPosts.pending, (state) => {
                state.status = 'loading';
            })

            .addCase(fetchUserPosts.fulfilled, (state, action) => {
                state.status = 'idle';
                state.userTravellerPosts = action.payload;
            })

            .addCase(fetchUserPosts.rejected, (state, action) => {
                state.status = 'idle';
                state.error = action.error.message;
            })

            .addCase(updateSenderPost.rejected, (state, action) => {
                state.status = 'idle';
                state.error = action.error.message;
            })

            .addCase(updateSenderPost.fulfilled, (state, action) => {
                const updatedPost = action.payload;
                state.userSenderPosts = state.userSenderPosts.map(post =>
                    post.id === updatedPost.id ? updatedPost : post
                );
            })
            .addCase(deleteSenderPost.fulfilled, (state, action) => {
                const deletedPostId = action.payload;
                state.userSenderPosts = state.userSenderPosts.filter(post =>
                    post.id !== deletedPostId
                );
            })

            .addCase(deleteTravellerPost.fulfilled, (state, action) => {
                const deletedPostId = action.payload;
                state.userTravellerPosts = state.userTravellerPosts.filter(post =>
                    post.id !== deletedPostId
                );
            })

            .addCase(deleteSenderPost.rejected, (state, action) => {
                state.status = 'idle';
                state.error = action.error.message;
            })

            .addCase(deleteTravellerPost.rejected, (state, action) => {
                state.status = 'idle';
                state.error = action.error.message;
            });
    },
});

export const { setUserSenderPosts, setUserTravelerPosts } = postSlice.actions;

export default postSlice.reducer;