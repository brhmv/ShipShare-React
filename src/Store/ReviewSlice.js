import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    reviews: [],
    status: 'idle',
    error: null,
};

export const fetchReviews = createAsyncThunk('review/fetchReviews', async () => {
    try {
        const response = await fetch('https://localhost:7189/api/Review/createReview');
        if (!response.ok) {
            throw new Error('Failed to fetch reviews');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        throw error;
    }
});

export const createReview = createAsyncThunk('review/createReview', async ({ reviewData, postId }) => {
    try {
        const response = await fetch(`https://localhost:7189/api/Review/createReview/${postId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(reviewData),
        });
        if (!response.ok) {
            throw new Error('Failed to create review');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        throw error;
    }
});


export const deleteReview = createAsyncThunk('review/deleteReview', async (reviewId) => {
    try {
        const response = await fetch(`https://localhost:7189/api/Review/deleteReview/${reviewId}`, {
            method: 'DELETE',
        });
        if (!response.ok) {
            throw new Error('Failed to delete review');
        }
        return reviewId;
    } catch (error) {
        throw error;
    }
});

const reviewSlice = createSlice({
    name: 'review',
    initialState,
    reducers: {
        addReview: (state, action) => {
            state.reviews.push(action.payload);
        },
        removeReview: (state, action) => {
            state.reviews = state.reviews.filter(review => review.id !== action.payload);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchReviews.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchReviews.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.reviews = action.payload;
            })
            .addCase(fetchReviews.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(createReview.fulfilled, (state, action) => {
                state.reviews.push(action.payload);
            })
            .addCase(deleteReview.fulfilled, (state, action) => {
                state.reviews = state.reviews.filter(review => review.id !== action.payload);
            });
    },
});

export const { addReview, removeReview } = reviewSlice.actions;

export const selectReviews = (state) => state.review.reviews;

export const selectReviewsStatus = (state) => state.review.status;

export const selectReviewsError = (state) => state.review.error;

export default reviewSlice.reducer;