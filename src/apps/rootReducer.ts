import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "~/features/users/userSlice";

const rootReducer = combineReducers({
  user: userReducer,
});

export default rootReducer;
