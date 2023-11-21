import React from "react";
import Alert from "@mui/material/Alert";
import { useDispatch, useSelector } from "react-redux";
import { setAlert } from "../redux/features/UserSlice";
import Snackbar from "@mui/material/Snackbar";

const Wrapper = () => {
  const UserState = useSelector((state) => state.userState);
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(setAlert({ open: false, message: "", severity: "" }));
  };
  return (
    <div>
      <Snackbar
        open={UserState.alert.open}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <Alert
          variant="filled"
          onClose={handleClose}
          severity={UserState.alert.severity}
        >
          {UserState.alert.message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Wrapper;
