import React from "react";
import { useGetContext } from "../AppContext";

const Users: React.FC<{}> = () => {
  const { state } = useGetContext();
  return (
    <div>
      {state.users.map(({ username }) => (
        <h1>{username}</h1>
      ))}
      <h2>{state?.count !== 0 ? state?.count : "인원이 없습니다"}</h2>
    </div>
  );
};
export default Users;
