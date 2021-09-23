import React, { createContext, useReducer, Dispatch, useContext } from "react";
import initialState from "./constants/initialState";
import "./App.css";

type Action =
  | { type: "COUNT" }
  | { type: "FILTER_BY_AGE"; limit: number }
  | { type: "FILTER_BY_NAME"; name: string }
  | { type: "RESET" };
type AppDispatch = Dispatch<Action>;

interface IState {
  state: typeof initialState;
  dispatch: AppDispatch;
}

export const AppContext = createContext<IState | null>(null);
const reducer = (state: typeof initialState, action: Action) => {
  switch (action.type) {
    case "COUNT":
      return {
        ...state,
        count: state.users.length,
      };
    case "FILTER_BY_AGE": {
      return {
        ...state,
        users: initialState.users.filter(({ age }) => age > action.limit),
      };
    }
    case "FILTER_BY_NAME": {
      console.log(initialState);
      return {
        ...state,
        users: initialState.users.filter(({ username }) =>
          username.includes(action.name)
        ),
      };
    }
    case "RESET":
      return {
        ...initialState,
      };
  }
};

export const AppContextProvider: React.FC<{}> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useGetContext = () => {
  const context = useContext(AppContext);
  if (context === null) {
    throw new Error("useContext must be used within a AppProvider");
  }
  return context;
};
