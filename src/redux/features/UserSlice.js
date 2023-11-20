import { createSlice } from "@reduxjs/toolkit";
import { data } from "../../assets/data";

const initialState = {
  users: [...data],
  edit: { open: false, data: {} },
  delete: { open: false, id: "" },
  openForm: false,
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
    setEdit: (state, action) => {
      state.edit.open = action.payload.open;
      state.edit.data = action.payload.data;
    },
    setDelete: (state, action) => {
      state.delete = { open: action.payload.open, id: action.payload.id };
    },
    setForm: (state, action) => {
      state.openForm = action.payload;
    },
  },
});

export const { addUser, removeUser, updateUser, setEdit, setDelete, setForm } =
  UserSlice.actions;

export default UserSlice.reducer;
