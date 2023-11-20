import { createSlice } from "@reduxjs/toolkit";
import { data } from "../../assets/data";


const initialState = {
  users: [...data],
};

export const UserSlice = createSlice({
  name: "UserSlice",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
    removeUser: (state, action) => {
      state.users = state.users.filter((val) => val.id !== action.payload);
    },
    updateUser: (state, action) => {
      state.users = state.users.map((val) =>
        val.id === action.payload.id ? action.payload.data : val
      );
    },
  },
});

export const { addUser, removeUser, updateUser } = UserSlice.actions;

export default UserSlice.reducer;
