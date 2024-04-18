import axios from "axios";
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const getProducts = createAsyncThunk(
    'products/getProducts',
    async () => {
        const { data } = await axios.get('https://656df576bcc5618d3c244f13.mockapi.io/ap/v1/Shop')
        return data;
    }
)

const productSlice = createSlice({
    name: 'products',
    initialState: {
        productData: null,
        isLoading: false,
        error: ''
    },
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.isLoading = false
                state.productData = action.payload
            })
            .addCase(getProducts.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    },
});

export default productSlice.reducer;
