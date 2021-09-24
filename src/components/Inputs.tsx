import React from "react";
import { AppDispatch } from "../App";
import { State } from "../constants/initialState";
const EMAIL_ADDRESS = "email_address";
const USERNAME = "username";

const Inputs: React.FC<{ state: State; dispatch: AppDispatch }> = ({
  state,
  dispatch,
}) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({
      type: "CREATE_A_USER",
      payload: {
        id: state.count + 1,
        username: state.usernameInput,
        email: state.emailInput,
        active: true,
      },
    });
    dispatch({
      type: "RESET_INPUTS",
    });
  };
  const handleChangeEmailAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "TYPE_EMAIL", payload: e.target.value });
  };

  const handleChangeUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "TYPE_USERNAME", payload: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor={EMAIL_ADDRESS}>
        <span>이메일 주소를 입력해주세요</span>
      </label>
      <input
        type="text"
        id={EMAIL_ADDRESS}
        onChange={handleChangeEmailAddress}
        value={state.emailInput}
      />
      <label htmlFor={USERNAME}>
        <span>유저 이름을 입력해주세요</span>
      </label>
      <input
        type="text"
        id={USERNAME}
        onChange={handleChangeUsername}
        value={state.usernameInput}
      ></input>
      <button>아이디 만들기 </button>
    </form>
  );
};

export default Inputs;
