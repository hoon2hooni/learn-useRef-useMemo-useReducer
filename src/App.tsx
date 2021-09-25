import { useReducer, Dispatch } from "react";
import Inputs from "./components/Inputs";
import UserList from "./components/UserList";
import initialState, { State, User } from "./constants/initialState";
import users from "./constants/users";

type Users = typeof users;

type Action =
  | { type: "SHOW_ACTIVE_USERS" }
  | { type: "RESET" }
  | { type: "CREATE_A_USER"; payload: User }
  | { type: "DELETE_A_SPECIFIC_USER"; payload: string }
  | { type: "DELETE_A_LAST_USER" };

export type AppDispatch = Dispatch<Action>;

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
    case "CREATE_A_USER": {
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    }
    case "DELETE_A_SPECIFIC_USER": {
      return {
        ...state,
        users: state.users.filter(({ id }) => id !== action.payload),
      };
    }
    case "DELETE_A_LAST_USER": {
      return {
        ...state,
        users: state.users.slice(0, state.users.length - 1),
      };
    }
    default: {
      throw new Error("없는 Action입니다.");
    }
  }
};

function App() {
  const [state, dispatch] = useReducer(appReducer, initialState);
  const handleDeleteALastUser = () => {
    dispatch({ type: "DELETE_A_LAST_USER" });
  };

  return (
    <>
      <Inputs dispatch={dispatch} />
      <div>
        <UserList users={state.users} />
      </div>
      <button onClick={handleDeleteALastUser}>마지막 유저 제거</button>
    </>
  );
}

export default App;
