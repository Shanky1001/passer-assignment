import { Button, Stack } from "@mui/material";
import React from "react";

const Error = () => {
  return (
    <Stack
      sx={{ height: "100vh", fontSize: "18px" }}
      direction={"column"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      Oops, Something went Wrong.
      <Button
        sx={{ marginTop: "20px" }}
        variant="contained"
        onClick={() => window.history.back()}
      >
        Go Back
      </Button>
    </Stack>
  );
};

export default Error;
