import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useDispatch, useSelector } from "react-redux";
import { setDelete, removeUser } from "../redux/features/UserSlice";
import { useNavigate } from "react-router-dom";

const DialogBox = () => {
  const UserState = useSelector((state) => state.userState);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClose = () => {
    dispatch(setDelete({ open: false, id: "" }));
  };
  const handleDelete = () => {
    dispatch(removeUser(UserState.delete.id));
    navigate("/");
    dispatch(setDelete({ open: false, id: "" }));
  };
  return (
    <Dialog open={UserState.delete.open} onClose={handleClose}>
      <DialogTitle id="alert-dialog-title">{"Confirmation"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Are you sure to delete this user ?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleDelete} autoFocus>
          Yes
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DialogBox;
