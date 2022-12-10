import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GetWishlist } from "../API/getWishlistAPI";

const initialState = {
    Wishlistproducts: [],
    length : 0

};

export const GetWishlistAsync = createAsyncThunk(
    "getwishlist/GetWishlist",
    async (payload) => {
      const response = await GetWishlist(payload);
      return response.data;
    }
);
  
  export const getWishlistSlice = createSlice({
    name: "getwishlist",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(GetWishlistAsync.fulfilled, (state, action) => {
        console.log(action.payload)
        state.Wishlistproducts = action.payload
        state.length = state.Wishlistproducts.length
      });
    },
  });
  
export const selectlength = (state) => state.getwishlist.length
export const selectproductswishlist = (state) => state.getwishlist.Wishlistproducts;
export default getWishlistSlice.reducer;