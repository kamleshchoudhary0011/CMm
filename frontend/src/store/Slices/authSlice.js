import {createSlice} from "@reduxjs/toolkit";

const authSlice = createSlice({
  name:"auth",
  initialState:{
    loading:false,
    error:null,
    message:null,
    user:null,
    isAuthenticated:false
  },

  reducers:{

  }


})


export default authSlice.reducer