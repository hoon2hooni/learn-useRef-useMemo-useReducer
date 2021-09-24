import users from "./users";

const initialState = {
  users,
  count: users.length,
  emailInput: "",
  usernameInput: "",
};
export type User = typeof initialState.users[0];
export type State = typeof initialState;
export default initialState;
