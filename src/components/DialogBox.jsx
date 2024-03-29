import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useDispatch, useSelector } from "react-redux";
import { setDelete, removeUser,setAlert } from "../redux/features/UserSlice";
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
    dispatch(
      setAlert({
        open: true,
        message: "User Deleted Successfully",
        severity: "success",
      })
    );
    handleClose();
    navigate("/");
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
        <Button variant="outlined" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="contained" onClick={handleDelete} autoFocus>
          Yes
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DialogBox;
