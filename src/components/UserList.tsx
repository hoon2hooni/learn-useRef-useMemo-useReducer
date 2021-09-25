import React from "react";
import { User } from "../constants/initialState";
const Users: React.FC<{ users: User[] }> = ({ users }) => {
  return (
    <div>
      {users.map(({ id, username, email, active }: User) => (
        <>
          <h1>{`id: ${id}`}</h1>
          <h2>{`username: ${username}`}</h2>
          <h3>{`email: ${email}`}</h3>
          <h4>{`active: ${active}`}</h4>
        </>
      ))}
    </div>
  );
};
const MemoizedUsers = React.memo(Users);
export default MemoizedUsers;
