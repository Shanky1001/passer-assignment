import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useNavigate } from "react-router-dom";

const UserCard = ({ data }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/user/${data.id}`);
  };
  return (
    <Card sx={{ width: 345 }}>
      <CardActionArea onClick={handleClick}>
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ color: "green" }}
          >
            {data.id}. {data?.username}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data.email}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data.role}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default UserCard;
