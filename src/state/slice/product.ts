import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export interface ProductState {
    allProducts: ProductType[];
    products: ProductType[];
    categories?: { label: string, value: string }[];
    search: string;
    category: string;
    loading: boolean;
    error?: any;
}

const initialState: ProductState = {
    allProducts: [],
    products: [],
    loading: false,
    search: "",
    category: "",
    error: null,
};

export const init = createAsyncThunk(
    "product/init",
    async () => {
        const response = await fetch("https://fakestoreapi.com/products");
        return response.json();
    }
);


const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        searchFilter: (state, action) => {
            state.search = action.payload.search;
            state.category = action.payload.category;

            console.log("search:", state.search,"category:", state.category);

            if (state.search && state.category) {
                state.products = state.allProducts.filter((product) => product.title.toLowerCase().includes(state.search.toLowerCase()) && product.category === state.category);
            } else if (state.search) {
                state.products = state.allProducts.filter((product) => product.title.toLowerCase().includes(state.search.toLowerCase()));
            } else if (state.category) {
                state.products = state.allProducts.filter((product) => product.category === state.category);
            }

            if (!state.search && !state.category) {
                state.products = state.allProducts;
            }
        },
    },
    extraReducers: (builder) => {
        builder.addCase(init.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(init.fulfilled, (state, action) => {
            state.loading = false;
            state.allProducts = action.payload;
            state.products = action.payload;
            state.categories = state.allProducts.reduce((acc, product) => {
                if (!acc.find((category) => category.value === product.category)) {
                    acc.push({ label: product.category, value: product.category });
                }
                return acc;
            }, [] as { label: string, value: string }[]);
        });
        builder.addCase(init.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
    },
});

export const { searchFilter } = productSlice.actions;
export default productSlice.reducer;