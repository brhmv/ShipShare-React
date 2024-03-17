import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { signIn, signUp } from './apiService';
import Cookies from 'js-cookie';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuthenticated: false,
        accessToken: null,
        loading: false,
        error: null,
        userdetails: null
    },

    reducers: {
        signInStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        signInSuccess: (state, action) => {
            state.loading = false;
            state.accessToken = action.payload.accessToken;
            state.isAuthenticated = true;
            // console.log("isAuthenticated auth");
            // console.log(state.isAuthenticated);
            state.error = null;
        },

        signInFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        signUpStart: (state) => {
            state.loading = true;
            state.error = null;
        },

        signUpSuccess: (state, action) => {
            state.loading = false;
            state.accessToken = action.payload.accessToken;
            state.isAuthenticated = true;
            state.error = null;
        },

        signUpFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        setAccessToken: (state, action) => {
            state.accessToken = action.payload;
            Cookies.set('accessToken', state.accessToken, { expires: 7 });
        },

        setUserDetails: (state, action) => {
            state.userdetails = action.payload;
        },
    },

    extraReducers: (builder) => {
        builder
            .addCase(getUserDetailsWithIdAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.userdetails = action.payload;
            });
    }


});

export const { signInStart, signInSuccess, signInFailure, signUpStart, signUpSuccess, signUpFailure, setAccessToken, setUserDetails } = authSlice.actions;


export const signInAsync = (email, password) => async (dispatch) => {
    dispatch(signInStart());
    try {
        const responseData = await signIn(email, password);

        console.log("responseData");
        console.log(responseData);
        console.log("responseData.accessToken");
        console.log(responseData.accessToken);

        dispatch(signInSuccess(responseData));
        dispatch(setAccessToken(responseData.accessToken));

    } catch (error) {
        dispatch(signInFailure(error.message));
    }
};

export const signUpAsync = (username, email, password) => async (dispatch) => {
    console.log("SignUpAsync called");

    dispatch(signUpStart());
    console.log("SignUpStart done");

    try {

        const responseData = await signUp(username, email, password);

        console.log("responseData");
        console.log(responseData);
        console.log("responseData.accessToken");
        // console.log(responseData.accessToken);

        dispatch(signUpSuccess(responseData));
        dispatch(setAccessToken(responseData.accessToken));
    }
    catch (error) {
        console.log("signUpFailure(error.message");
        dispatch(signUpFailure(error.message));
    }
};


export const getUserDetailsWithIdAsync = createAsyncThunk(
    'auth/getUserDetailsWithId',
    async (userId) => {
        try {
            console.log("getUserDetailsWithId called");

            console.log("userid: " + userId);

            const accessToken = Cookies.get('accessToken');

            const response = await fetch(`https://localhost:7189/api/Auth/getUserDetailsWithId/${userId}`,
                {
                    headers: {
                        'Authorization': `Bearer ${accessToken}`,
                    },
                    method: 'GET',
                });


            if (!response.ok) {
                throw new Error('Failed to fetch user details');
            }

            const data = await response.json();

            console.log("data");
            console.log(data);
            return data;
        } catch (error) {
            throw error;
        }
    }
);