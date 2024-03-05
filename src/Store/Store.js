import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './AuthSlice';
import postSlice from './PostSlice';

const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        post: postSlice.reducer
    },

});

export default store;