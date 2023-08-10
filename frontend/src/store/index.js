import {configureStore} from '@reduxjs/toolkit';

const store = configureStore({
    reducer:{

    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== 'production',
});

export default store;