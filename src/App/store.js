import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import userReducer from '../users/userSlice';


export default configureStore({
    reducer: {
        user: userReducer,
     },
    middleware: getDefaultMiddleware({
        serializableCheck:false, 
    }),
});