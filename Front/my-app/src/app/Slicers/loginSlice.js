import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Login } from "../API/loginAPI";
import jwt_decode from "jwt-decode";
import jwtDecode from "jwt-decode";
const initialState = {
  userName: "",
  email: "",
  token: "",
  logged: false,
  id: "",
  first_name:"",
  last_name:"",

};

export const LoginAsync = createAsyncThunk(
  "login/Login",
  async (loginData) => {
    const response = await Login(loginData);
    return response.data;
  }
);

export const LoginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(LoginAsync.fulfilled, (state, action) => {
        // console.log(action.payload)
        if (action.payload.access) {
          state.token = action.payload.access
          state.logged = true;
          state.userName = jwt_decode(state.token).username
          state.id = jwtDecode(state.token).user_id
          state.first_name = jwtDecode(state.token).first_name
          state.last_name = jwtDecode(state.token).last_name
          state.email = jwtDecode(state.token).email
          console.log(state.userName)
          console.log(state.token)
          // state.email = jwt_decode(action.payload.access).eeemail
          // console.log( state.email)
        }
      // }).addCase(doSignOutAsync.fulfilled, (state, action) => {
      //   console.log("log out")
      //   state.token = ""
      //   state.logged = false;
      //   state.userName = ""
      //   state.email = ""
      //   // console.log( state.email)
      // });
  })
  },
});




export default LoginSlice.reducer;
export const selectEmail = (state) => state.login.email;
export const selectLogged = (state) => state.login.logged;
export const selectToken = (state) => state.login.token;
export const selectUserName = (state) => state.login.userName;
export const selectUserId = (state) => state.login.id;
export const selectFirstName = (state) => state.login.first_name 
export const selectLastName = (state) => state.login.last_name