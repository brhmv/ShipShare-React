import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './AuthSlice';
import travelPostSlice from './TravelPostSlice';
import senderPostSlice from './SenderPostSlice';

const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        postTravel: travelPostSlice,
        postSender: senderPostSlice
    },
});

export default store;