import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AddToWishlist } from "../API/addToWishlistAPI";
const initialState = {

};




export const AddToWishlistAsync = createAsyncThunk(
    "addTowishlist/AddToWishlist",

    async (payload) => {
        console.log(payload)
        const response = await AddToWishlist(payload);
        return response.data;
    }
);



export const AddToWishlistSlice = createSlice({
    name: "addTowishlist",
    initialState,
    reducers: {
        addToWishList: (state, action) => {
            console.log(state);
            console.log(action.payload);
          },
    },
    
});
export const { addToWishList } = AddToWishlistSlice.actions;
export default AddToWishlistSlice.reducer;