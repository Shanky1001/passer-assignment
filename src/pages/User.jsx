import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Form from "../components/Form";
import DialogBox from "../components/DialogBox";
import { setDelete, setEdit, setForm } from "../redux/features/UserSlice";
import { Stack } from "@mui/material";

const User = () => {
  const params = useParams();
  const { id } = params;
  const UserState = useSelector((state) => state.userState);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const getData = useMemo(() => {
    let data;
    UserState.users.forEach((val) => {
      if (val.id === parseInt(id)) {
        data = val;
      }
    });
    return data;
  }, [id, UserState.users]);

  const handleDelete = () => {
    dispatch(setDelete({ open: true, id: getData.id }));
  };
  const handleEdit = () => {
    dispatch(setEdit({ open: true, data: getData }));
  };
  const handleAddUser = () => {
    dispatch(setForm(true));
  };
  const handleBack = () => {
    navigate("/");
  };

  return (
    <div className="user_container">
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Button variant="outlined" onClick={handleBack}>
          Back
        </Button>
        <Button variant="contained" onClick={handleAddUser}>
          Add User
        </Button>
      </Stack>
      <Card sx={{ width: 345, marginTop: "20px", marginInline: "auto" }}>
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            {getData?.id}. {getData?.username}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Email: {getData.email}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Role: {getData.role}
          </Typography>
          {getData.address ? (
            <Typography variant="body2" color="text.secondary">
              Address: {getData.address}
            </Typography>
          ) : null}
        </CardContent>
        {getData.role === "admin" && (
          <CardActions>
            <Button
              size="small"
              variant="outlined"
              onClick={() => handleEdit()}
            >
              Edit
            </Button>
            <Button
              size="small"
              variant="outlined"
              onClick={() => handleDelete()}
            >
              Delete
            </Button>
          </CardActions>
        )}
      </Card>
      <Form />
      <DialogBox />
    </div>
  );
};

export default User;
