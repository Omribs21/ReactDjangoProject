import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CleanWishlist } from "../API/CleanWishlistAPI";
const initialState = {

};




export const CleanWishlistAsync = createAsyncThunk(
    "cleanwishlist/CleanWishlist",

    async (payload) => {
        console.log(payload)
        const response = await CleanWishlist(payload);
        return response.data;
    }
);



export const CleanWishlistSlice = createSlice({
    name: "cleanwishlist",
    initialState,
});
export default CleanWishlistSlice.reducer;