import React, { useReducer } from "react";
import { AppDispatch } from "../App";

const ID = "id";
const EMAIL_ADDRESS = "email_address";
const USERNAME = "username";

type InputAction =
  | { type: "TYPE_ID"; payload: string }
  | { type: "TYPE_USERNAME"; payload: string }
  | { type: "TYPE_EMAIL"; payload: string }
  | { type: "RESET_INPUTS" };

type EachInputActionType = Exclude<InputAction["type"], "RESET_INPUTS">;
const inputInitialState = {
  id: "",
  email: "",
  username: "",
};

type inputState = typeof inputInitialState;

const inputReducer = (state: inputState, action: InputAction) => {
  switch (action.type) {
    case "TYPE_ID": {
      return {
        ...state,
        id: action.payload,
      };
    }
    case "TYPE_EMAIL": {
      return {
        ...state,
        email: action.payload,
      };
    }
    case "TYPE_USERNAME": {
      return {
        ...state,
        username: action.payload,
      };
    }
    case "RESET_INPUTS": {
      return {
        id: "",
        email: "",
        username: "",
      };
    }
    default: {
      throw new Error("없는 인풋 Action입니다.");
    }
  }
};

const Inputs: React.FC<{
  dispatch: AppDispatch;
}> = ({ dispatch }) => {
  const [inputState, inputDispatch] = useReducer(
    inputReducer,
    inputInitialState
  );

  const handleCreateAUser = (e: React.FormEvent<HTMLFormElement>) => {
    const { id, username, email } = inputState;
    e.preventDefault();
    dispatch({
      type: "CREATE_A_USER",
      payload: {
        id,
        username,
        email,
        active: true,
      },
    });

    inputDispatch({
      type: "RESET_INPUTS",
    });
  };
  const handleInputChange =
    (actionType: EachInputActionType) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      inputDispatch({ type: actionType, payload: e.target.value });
    };

  return (
    <form onSubmit={handleCreateAUser}>
      <label htmlFor={ID}>
        <span>이메일 주소를 입력해주세요</span>
      </label>
      <input
        type="text"
        id={ID}
        onChange={handleInputChange("TYPE_ID")}
        value={inputState.id}
      />
      <label htmlFor={EMAIL_ADDRESS}>
        <span>이메일 주소를 입력해주세요</span>
      </label>
      <input
        type="text"
        id={EMAIL_ADDRESS}
        onChange={handleInputChange("TYPE_EMAIL")}
        value={inputState.email}
      />
      <label htmlFor={USERNAME}>
        <span>유저 이름을 입력해주세요</span>
      </label>
      <input
        type="text"
        id={USERNAME}
        onChange={handleInputChange("TYPE_USERNAME")}
        value={inputState.username}
      ></input>
      <button>아이디 만들기 </button>
    </form>
  );
};
const MemoizedInput = React.memo(Inputs);
export default MemoizedInput;
