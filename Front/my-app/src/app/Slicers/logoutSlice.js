import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { myLogout } from "../API/LogOutAPI";

const initialState = {
  userName: "",
  email: "",
  token: "aa",
  logged: false,

};


export const doSignOutAsync = createAsyncThunk(
  'logout/myLogout',
  async (token) => {
      console.log(token)
      const response = await myLogout(token);
      return response.data;
  }
);

export const LogoutSlice = createSlice({
  name: "logout",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(doSignOutAsync.fulfilled, (state, action) => {
        console.log("log out")
        state.token = ""
        state.logged = false;
        state.userName = ""
        state.email = ""
      });
  },
});




export default LogoutSlice.reducer;
export const selectLogged = (state) => state.logout.logged;
export const selectTokenLogOut = (state) => state.logout.token;