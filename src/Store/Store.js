import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './AuthSlice';
import travelPostSlice from './TravelPostSlice';
import senderPostSlice from './SenderPostSlice';
import UserPostsSlice from './UserPostsSlice';

const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        postTravel: travelPostSlice,
        postSender: senderPostSlice,
        userPosts: UserPostsSlice //profile
    },
});

export default store;