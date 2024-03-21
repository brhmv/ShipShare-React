import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

const initialState = {
    notifications: [],
    status: 'idle',
    error: null,
};

export const fetchNotifications = createAsyncThunk('notifications/fetchNotifications',
    async () => {
        try {
            const accessToken = Cookies.get('accessToken');

            const response = await fetch('https://localhost:7189/api/Notification/getAllNotifications', {

                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                    'Content-Type': 'application/json',

                },
                method: 'GET'

            });

            if (!response.ok) {
                throw new Error('Failed to fetch notifications');
            }
            const data = await response.json();

            return data["$values"];
        } catch (error) {
            throw error;
        }
    }
);

export const deleteNotification = createAsyncThunk('notifications/deleteNotification',
    async (id) => {
        try {
            const response = await fetch(`https://localhost:7189/api/Notification/deleteNotification/${id}`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error('Failed to delete notification');
            }
            return id;
        } catch (error) {
            throw error;
        }
    }
);

const notificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchNotifications.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchNotifications.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.notifications = action.payload;
            })
            .addCase(fetchNotifications.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(deleteNotification.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(deleteNotification.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.notifications = state.notifications.filter(notification => notification.id !== action.payload);
            })
            .addCase(deleteNotification.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default notificationSlice.reducer;
