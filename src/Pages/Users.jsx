import React from "react";
import NavPanel from "../Components/NavPanel/NavPanel";
import UsersWrapper from "../Components/UsersWrapper/UsersWrapper";

const Users = () => {
  return (
    <>
      <NavPanel useActiveItem="Users" />
      <UsersWrapper />
    </>
  );
};

export default Users;
