import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { UserState } from "~/types";

const initialState: UserState = {
  data: [],
  loading: "ready",
  error: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

const userReducer = userSlice.reducer;
export const userActions = userSlice.actions;

export default userReducer;
