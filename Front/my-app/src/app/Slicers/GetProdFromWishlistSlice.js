import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { json } from "react-router-dom";
import { GetProdFromWishlist } from "../API/GetProdWishlist";
const initialState = {
    products: [],
    size :0
};

export const GetProdFromWishlistAsync = createAsyncThunk(
    "Getprodfromwishlist/GetProdFromWishlist",
    async (data) => {
      const response = await GetProdFromWishlist(data);
      return response.data;
    }
);
  
  export const GetProdFromWishlistSlice = createSlice({
    name: "Getprodfromwishlist",
    initialState,
    reducers: {
      size: (state) =>{
        const x =(JSON.parse(state.size))
        const count =0
        x.forEach(element => {
          count += 1
        });
        state.size =count;
      }

    },
    extraReducers: (builder) => {
      builder.addCase(GetProdFromWishlistAsync.fulfilled, (state, action) => {
        console.log(action.payload)
        state.products= action.payload
      });
    },
  });
  
export const {size} =GetProdFromWishlistSlice.actions
export const selectallprods = (state) =>state.Getprodfromwishlist.products;
export default GetProdFromWishlistSlice.reducer;