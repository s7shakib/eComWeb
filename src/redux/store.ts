import { ConfigureStoreOptions, configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cartSlice"


export const store = configureStore({
    reducer:{
        cartReducer,
    }
})

export type RooState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
