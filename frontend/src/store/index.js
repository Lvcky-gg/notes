import {configureStore} from '@reduxjs/toolkit';
import noteReducer from './notes'

const store = configureStore({
    reducer:{
        notes:noteReducer

    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== 'production',
});

export default store;