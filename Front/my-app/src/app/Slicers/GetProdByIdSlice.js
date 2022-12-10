import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getProdById } from "../API/getProdAPI";
const initialState = {
    prod: []

};

export const GetProdByIdAsync = createAsyncThunk(
    "getprodbyid/getProdById",
    async (payload) => {
      const response = await getProdById(payload);
      return response.data;
    }
);
  
  export const GetProdByIdSlice = createSlice({
    name: "getprodbyid",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(GetProdByIdAsync.fulfilled, (state, action) => {
        console.log(action.payload)
        state.prod = action.payload
      });
    },
  });
  
export const selectprod = (state) => state.getprodbyid.prod;
export default GetProdByIdSlice.reducer;