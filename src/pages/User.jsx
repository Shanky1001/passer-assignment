import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";

const User = () => {
  const params = useParams();
  const { id } = params;
  const UserState = useSelector((state) => state.userState);
  const getData = useMemo(() => {
    let data;
    UserState.users.forEach((val) => {
      if (val.id === parseInt(id)) {
        data = val;
      }
    });
    return data;
  }, [id, UserState.users]);

  return (
    <div className="user_container">
      <Card sx={{ width: 345 }}>
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
            <Button size="small">Edit</Button>
            <Button size="small">Delete</Button>
          </CardActions>
        )}
      </Card>
    </div>
  );
};

export default User;
