import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './AuthSlice';
import travelPostSlice from './TravelPostSlice';
import senderPostSlice from './SenderPostSlice';
import UserPostsSlice from './UserPostsSlice';
import ReviewSlice from './ReviewSlice';

const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        postTravel: travelPostSlice,
        postSender: senderPostSlice,
        userPosts: UserPostsSlice, //profile post
        review: ReviewSlice,
    },
});

export default store;