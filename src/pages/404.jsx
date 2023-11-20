import { Button, Stack } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Stack sx={{height:"100vh",fontSize:"18px"}} direction={"column"} alignItems={"center"} justifyContent={"center"}>
      Oops, Seems you have come to a wrong page.
      <Button sx={{marginTop:"20px"}} variant="contained" onClick={() => navigate("/")}>Go Home</Button>
    </Stack>
  );
};

export default NotFound;
