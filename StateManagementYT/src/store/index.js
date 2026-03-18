import { configureStore } from '@reduxjs/toolkit'
import { studentSlice } from './student';

export const stores = configureStore({
    reducer:{
        student: studentSlice.reducer
    }
});