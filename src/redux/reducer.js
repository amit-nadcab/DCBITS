import { createSlice } from "@reduxjs/toolkit";
import { logDOM } from "@testing-library/react";

// let email = localStorage.getItem("user_email");
let user_id = localStorage.getItem("user_id");

const initialValue = {
  user: {
    // email: email ? email : "",
    user_id: user_id ? user_id : "",
  },
  isLoggedIn: user_id ? true : false,
};

export const dataSlice = createSlice({
  name: "dcbits",
  initialState: {
    value: initialValue,
  },
  reducers: {
    setIsLoggedIn: (state, action) => {
      // localStorage.setItem("user_email", action.payload.LoginDetails.email);
      localStorage.setItem(
        "user_id",
        action.payload.LoginDetails.params.user_id
      );
      state.value.user = action.payload.LoginDetails;
      state.value.isLoggedIn = true;
    },
  },
});

export const { setIsLoggedIn } = dataSlice.actions;
export default dataSlice.reducer;
