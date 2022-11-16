import { createSlice } from "@reduxjs/toolkit";

const initialStateValue =
  "pk.eyJ1Ijoidmlub2FyeXN0aW8iLCJhIjoiY2w2czRvaTR4MHRzcTNibzhlNGUzYWNpNSJ9.oehlKj-dv7_LzzmhzVJcmg";

export const tokenSlice = createSlice({
  name: "token",
  initialState: { value: initialStateValue },
  reducers: {
    token: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { token } = tokenSlice.actions;

export default tokenSlice.reducer;
