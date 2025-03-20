import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./slice/product";
import RouteSlice from "./slice/route";

export const store = configureStore({
    reducer: {
        product: ProductSlice,
        route: RouteSlice,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch