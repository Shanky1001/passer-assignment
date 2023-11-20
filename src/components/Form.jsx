import { Box, Button, Stack, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import { useDispatch, useSelector } from "react-redux";
import {
  addUser,
  setEdit,
  setForm,
  updateUser,
} from "../redux/features/UserSlice";
import Modal from "@mui/material/Modal";

const roles = [
  { label: "User", value: "user" },
  { label: "Admin", value: "admin" },
];

const Form = () => {
  const UserState = useSelector((state) => state.userState);
  const dispatch = useDispatch();
  const handleClose = () => {
    if (UserState.edit.open) {
      dispatch(setEdit({ open: false, data: {} }));
    } else {
      dispatch(setForm(false));
    }
  };
  const [state, setState] = useState({
    id: "",
    username: "",
    email: "",
    role: "user",
    address: "",
  });

  useEffect(() => {
    if (UserState.edit.open) {
      setState(UserState.edit.data);
    }
  }, [UserState.edit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (UserState.edit.open) {
      dispatch(
        updateUser({
          id: parseInt(state.id),
          data: { ...state, id: parseInt(state.id) },
        })
      );
      dispatch(setEdit({ open: false, data: {} }));
    } else {
      dispatch(addUser({ ...state, id: UserState.users.length + 1 }));
    }
    handleClose()
  };

  return (
    <div>
      <Modal
        open={UserState.edit.open || UserState.openForm}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={handleSubmit}>
            <Stack gap={2}>
              <TextField
                required
                label="username"
                value={state.username}
                onChange={(e) =>
                  setState({ ...state, username: e.target.value })
                }
              />
              <TextField
                required
                label="email"
                type="email"
                value={state.email}
                onChange={(e) => setState({ ...state, email: e.target.value })}
              />
              <TextField
                label="Address"
                multiline
                rows={4}
                value={state?.address}
                onChange={(e) =>
                  setState({ ...state, address: e.target.value })
                }
              />
              <TextField
                required
                select
                label="Select Role"
                defaultValue={state.role}
                value={state.role}
                onChange={(e) => setState({ ...state, role: e.target.value })}
              >
                {roles.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Stack>
            <Button
              sx={{ float: "right", marginTop: "20px" }}
              variant="contained"
              type="submit"
            >
              Save
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default Form;

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: 4,
  p: 4,
};
