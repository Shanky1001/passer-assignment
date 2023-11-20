import React, { useState } from "react";
import { useSelector } from "react-redux";
import UserCard from "../components/UserCard";
import { Stack } from "@mui/material";
import Pagination from "@mui/material/Pagination";

const postPerPage = 10;
const Home = () => {
  const UserState = useSelector((state) => state.userState);
  const [page, setPage] = useState(1);
  const handlePageChange = (e, value) => {
    setPage(value);
  };
  return (
    <div className="home_container">
      <Stack
        direction={{ xs: "column", sm: "row" }}
        gap={2}
        flexWrap="wrap"
        justifyContent={"center"}
        alignItems={"center"}
      >
        {UserState.users
          .slice(page * postPerPage - postPerPage, page * postPerPage)
          .map((user) => (
            <UserCard data={user} key={user.id} />
          ))}
      </Stack>
      {UserState.users.length > postPerPage ? (
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"center"}
          sx={{ marginTop: "20px" }}
        >
          <Pagination
            count={Math.ceil(UserState.users.length / postPerPage)}
            page={page}
            onChange={handlePageChange}
            size="large"
          />
        </Stack>
      ) : null}
    </div>
  );
};

export default Home;
