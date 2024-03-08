// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import Cookies from 'js-cookie';

// export const fetchUserPosts = createAsyncThunk('post/fetchUserPosts', async () => {
//     try {
//         const accessToken = Cookies.get('accessToken');
//         const response = await fetch("https://localhost:7189/api/TravellerPost/getAllTravellerPosts", {
//             headers: {
//                 'Authorization': `Bearer ${accessToken}`,
//             },
//             method: 'GET',
//         });

//         const data = await response.json();
//         console.log(data["$values"]);
//         return data["$values"];

//     } catch (error) {
//         console.log(error);
//         throw error;
//     }
// });

// export const fetchUserSenderPosts = createAsyncThunk('post/fetchUserSenderPosts', async () => {
//     try {
//         const accessToken = Cookies.get('accessToken');
//         const response = await fetch("https://localhost:7189/api/SenderPost/getUserSenderPosts", {
//             headers: {
//                 'Authorization': `Bearer ${accessToken}`,
//             },
//             method: 'GET',
//         });

//         const data = await response.json();
//         console.log("data");
//         console.log(data);
//         console.log(data["$values"]);
//         return data["$values"];

//     } catch (error) {
//         console.log(error);
//         throw error;
//     }
// });

// const postSlice = createSlice({
//     name: 'userPost',
//     initialState: {
//         userSenderPosts: [],
//         userTravelerPosts: [],
//         status: 'idle',
//         error: null,
//     },
//     reducers: {
//         setUserSenderPosts: (state, action) => {
//             state.userSenderPosts = action.payload;
//             console.log("state.userSenderPosts");
//             console.log(state.userSenderPosts);
//         },
//         setUserTravelerPosts: (state, action) => {
//             state.userTravelerPosts = action.payload;
//         },
//     },
//     extraReducers: (builder) => {
//         builder
//             .addCase(fetchUserSenderPosts.fulfilled, (state, action) => {
//                 state.status = 'idle';
//                 state.userSenderPosts = action.payload;
//                 console.log("extra reducer");
//                 console.log("extra reducer");
//                 console.log("extra reducer");
//                 console.log("extra reducer");
//                 console.log("extra reducer");
//                 console.log("extra reducer");
//                 console.log("extra reducer");
//                 console.log("extra reducer");

//                 console.log(state.userSenderPosts);
//             })
//             .addCase(fetchUserSenderPosts.pending, (state) => {
//                 state.status = 'loading';
//             })
//             .addCase(fetchUserSenderPosts.rejected, (state, action) => {
//                 state.status = 'idle';
//                 state.error = action.error.message;
//             })
//             .addCase(fetchUserPosts.fulfilled, (state, action) => {
//                 state.status = 'idle';
//                 state.userTravelerPosts = action.payload;
//             })
//             .addCase(fetchUserPosts.pending, (state) => {
//                 state.status = 'loading';
//             })
//             .addCase(fetchUserPosts.rejected, (state, action) => {
//                 state.status = 'idle';
//                 state.error = action.error.message;
//             });
//     },
// });

// export const { setUserSenderPosts, setUserTravelerPosts } = postSlice.actions;

// export default postSlice.reducer;


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

const postSlice = createSlice({
    name: 'userPosts',
    initialState: {
        userSenderPosts: [],
        userTravelerPosts: [],
        status: 'idle',
        error: null,
    },
    reducers: {
        setUserSenderPosts: (state, action) => {
            state.userSenderPosts = action.payload;
        },
        setUserTravelerPosts: (state, action) => {
            state.userTravelerPosts = action.payload;
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
                state.userTravelerPosts = action.payload; // Corrected this line
            })
            .addCase(fetchUserPosts.rejected, (state, action) => {
                state.status = 'idle';
                state.error = action.error.message;
            });
    },
});

export const { setUserSenderPosts, setUserTravelerPosts } = postSlice.actions;

export default postSlice.reducer;
