import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { signIn, signUp } from './apiService';
import Cookies from 'js-cookie';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuthenticated: Cookies.get("accessToken") ? true : false,
        accessToken: null,
        error: null,
        userdetails: null,
        mydetails: null
    },

    reducers: {
        signOut: (state) => {
            state.isAuthenticated = false;
            Cookies.remove("accessToken");
        },
        signInStart: (state) => {
            state.error = null;
        },
        signInSuccess: (state, action) => {
            console.log(action.payload);
            state.accessToken = action.payload.accessToken;
            state.isAuthenticated = state.accessToken ? true : false;
            state.error = action.payload.statusText;
        },
        signUpSuccess: (state, action) => {
            if (action.payload.accessToken) {
                Cookies.set("accessToken", action.payload.accessToken);
                Cookies.set("refreshToken", action.payload.refreshToken);
                state.isAuthenticated = true;
            }
            else
                state.error = action.payload.error;
        },
        setUserDetails: (state, action) => {
            state.userdetails = action.payload;
        },

        setMyDetails: (state, action) => {
            state.mydetails = action.payload;
        },
    },

    extraReducers: (builder) => {
        builder
            .addCase(getUserDetailsWithIdAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.userdetails = action.payload;
            })
            .addCase(getMyDetailsAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.mydetails = action.payload;
            });
    }

});

export const { signInStart, signInSuccess, signUpSuccess, setAccessToken, setUserDetails, signOut } = authSlice.actions;

export const signInAsync = (email, password) => async (dispatch) => {
    dispatch(signInStart());
    const responseData = await signIn(email, password);
    dispatch(signInSuccess(responseData));
    if (responseData.accessToken)
        Cookies.set("accessToken", responseData.accessToken);


};

export const signUpAsync = (username, email, password) => async (dispatch) => {
    dispatch(signInStart());
    const responseData = await signUp(username, email, password);
    dispatch(signUpSuccess(responseData));
};


export const getUserDetailsWithIdAsync = createAsyncThunk('auth/getUserDetailsWithId',
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

export const getMyDetailsAsync = createAsyncThunk('auth/getMyDetails', async () => {
    try {
        const accessToken = Cookies.get('accessToken');

        const response = await fetch(`https://localhost:7189/api/Auth/getMyDetails`,
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
        return data;
    } catch (error) {
        throw error;
    }
}
);