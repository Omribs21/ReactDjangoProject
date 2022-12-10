import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Register  } from "../API/registerAPI";

const initialState = {
   register:[]

};

export const RegisterAsync = createAsyncThunk(
    "register/Register",
    async (registerData) => {
      const response = await Register(registerData);
      return response.data;
    }
);
  
  export const registerSlice = createSlice({
    name: "register",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(RegisterAsync.fulfilled, (state, action) => {
        state.register = action.payload;
      });
    },
  });
  

export default registerSlice.reducer;