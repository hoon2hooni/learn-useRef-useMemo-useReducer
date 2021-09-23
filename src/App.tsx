import React, { createContext, useReducer, Dispatch } from "react";
import Input from "./components/Input";
import Users from "./components/Users";
import initialState from "./constants/initialState";
import "./App.css";

type Action =
  | { type: "COUNT" }
  | { type: "FILTER_BY_AGE"; limit: number }
  | { type: "FILTER_BY_NAME"; name: string };
type AppDispatch = Dispatch<Action>;
type State = typeof initialState;
export const AppStateContext = createContext<State | null>(null);
export const AppDispatchContext = createContext<AppDispatch | null>(null);
const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "COUNT":
      return {
        ...state,
        count: state.users.length,
      };
    case "FILTER_BY_AGE": {
      return {
        ...state,
        users: state.users.filter(({ age }) => age > action.limit),
      };
    }
    case "FILTER_BY_NAME": {
      return {
        ...state,
        users: state.users.filter(({ username }) =>
          username.includes(action.name)
        ),
      };
    }
  }
};
function App() {
  //그냥 상수값 보내도 되는지..?
  const [state, dispatch] = useReducer(reducer, { ...initialState });
  return (
    <AppStateContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>
        <div className="App">
          <Input />
          <Users />
        </div>
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  );
}

export default App;
