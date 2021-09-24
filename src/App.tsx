import React, { useRef, useReducer, Dispatch } from "react";
import Users from "./components/Users";
import initialState, { State, User } from "./constants/initialState";
import users from "./constants/users";

type Users = typeof users;

type Action =
  | { type: "TYPE_USERID"; payload: string }
  | { type: "TYPE_EMAIL"; payload: string }
  | { type: "SHOW_ACTIVE_USERS" }
  | { type: "RESET" }
  | { type: "CREATE_A_USER"; payload: User }
  | { type: "DELETE_A_USER"; payload: number };

type AppDispatch = Dispatch<Action>;
interface IContext {
  state: State;
  dispatch: AppDispatch;
}

const countActiveUser = (users: Users) =>
  users.filter((user) => user.active).length;

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
    case "TYPE_USERID": {
      return {
        ...state,
        id: action.payload,
      };
    }
    case "CREATE_A_USER": {
      return {
        ...state,
        users: [...state.users, action.payload],
        count: state.count + 1,
      };
    }
    case "DELETE_A_USER": {
      return {
        ...state,
        users: state.users.filter(({ id }) => id !== action.payload),
        count: state.count - 1,
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
      <Users users={state.users} />
    </>
  );
}

export default App;
