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

  const handleDeleteASpecificUser = () => {
    dispatch({ type: "DELETE_A_SPECIFIC_USER", payload: 1 });
  };

  return (
    <>
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
      {/* 일단 아이디 1만 지우게 구현 함 */}
      <button onClick={handleDeleteASpecificUser}>특정 아이디 지우기</button>
    </>
  );
};

export default Inputs;
