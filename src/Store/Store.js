import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './AuthSlice';
import travelPostSlice from './TravelPostSlice';
import senderPostSlice from './SenderPostSlice';
import UserSenderSlice from './UserSenderSlice';

const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        postTravel: travelPostSlice,
        postSender: senderPostSlice,
        userPosts : UserSenderSlice,
    },
});

export default store;