import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: RouteState[] = [
    {
        path: "",
        id: 1,
        title: 'home',
        pathname: 'home-layout',
        childs: [
            {
                path: "/",
                id: 10,
                title: "home",
                pathname: 'home',
            },
            {
                path: "product-details/:id",
                id: 11,
                title: "Product Details",
                pathname: "product-details",
            }
        ]
    },
];

const routeSlice = createSlice({
    name: "routes",
    initialState,
    reducers: {
        routeFilter: (state, action: PayloadAction<number[]>) => {
            return state.filter(route => action.payload.includes(route.id));
        }
    }
})

export const { routeFilter } = routeSlice.actions;
export default routeSlice.reducer;