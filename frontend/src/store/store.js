import {configureStore} from "@reduxjs/toolkit"
import authReduser from "../store/Slices/authSlice"
export const store = configureStore({
  reducer:{
   auth : authReduser
  },
})