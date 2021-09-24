import React, { useRef, useReducer, Dispatch } from "react";
import Inputs from "./components/Inputs";
import Users from "./components/Users";
import initialState, { State, User } from "./constants/initialState";
import users from "./constants/users";

type Users = typeof users;

type Action =
  | { type: "TYPE_USERNAME"; payload: string }
  | { type: "TYPE_EMAIL"; payload: string }
  | { type: "RESET_INPUTS" }
  | { type: "SHOW_ACTIVE_USERS" }
  | { type: "RESET" }
  | { type: "CREATE_A_USER"; payload: User }
  | { type: "DELETE_A_SPECIFIC_USER"; payload: number };

export type AppDispatch = Dispatch<Action>;
interface IContext {
  state: State;
  dispatch: AppDispatch;
}

const countActiveUser = (users: Users) =>
  users.filter((user) => user.active).length;
const deleteASpecificUser = (users: Users, specificId: number) => {
  const result = users.filter(({ id }) => id !== specificId);
  return { users: result, count: result.length };
};
const appReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "RESET": {
      return {
        ...initialState,
      };
    }
    case "SHOW_ACTIVE_USERS": {
      return {
        ...state,
        users: state.users.filter(({ active }) => active),
        count: countActiveUser(state.users),
      };
    }
    case "TYPE_EMAIL": {
      return {
        ...state,
        emailInput: action.payload,
      };
    }
    case "TYPE_USERNAME": {
      return {
        ...state,
        usernameInput: action.payload,
      };
    }
    case "RESET_INPUTS": {
      return {
        ...state,
        emailInput: "",
        usernameInput: "",
      };
    }
    case "CREATE_A_USER": {
      return {
        ...state,
        users: [...state.users, action.payload],
        count: state.count + 1,
      };
    }
    case "DELETE_A_SPECIFIC_USER": {
      const { users, count } = deleteASpecificUser(state.users, action.payload);
      return {
        ...state,
        users,
        count,
      };
    }

    default: {
      throw new Error("없는 Action입니다.");
    }
  }
};

function App() {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <>
      <Inputs state={state} dispatch={dispatch} />
      <Users users={state.users} />
    </>
  );
}

export default App;
