import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getallproducts } from "../API/GetAllProducts";
const initialState = {
    AllProducts: []

};

export const GetAllProductsAsync = createAsyncThunk(
    "getallprods/getallproducts",
    async () => {
      const response = await getallproducts();
      return response.data;
    }
);
  
  export const GetAllProductsSlice = createSlice({
    name: "getallprods",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(GetAllProductsAsync.fulfilled, (state, action) => {
        // console.log(action.payload)
        state.AllProducts = action.payload
      });
    },
  });
  
export const selectAllprods = (state) => state.getallprods.AllProducts;
export default GetAllProductsSlice.reducer;