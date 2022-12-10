import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AddNewProduct } from "../API/addproductAPI";
const initialState = {

};

export const AddNewProdAsync = createAsyncThunk(
    "addnewprod/AddNewProduct",

    async (payload) => {
        console.log(payload)
        const response = await AddNewProduct(payload);
        return response.data;
    }
);



export const AddNewProdSlice = createSlice({
    name: "addnewprod",
    initialState,
    reducers: {
        addnewprod: (state, action) => {
            console.log(state);
            console.log(action.payload);
          },
    },
    
});
export const { addnewprod } = AddNewProdSlice.actions;
export default AddNewProdSlice.reducer;