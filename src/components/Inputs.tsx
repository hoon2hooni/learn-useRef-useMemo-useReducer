import React from "react";
import { AppDispatch } from "../App";
const EMAIL_ADDRESS = "email_address";
const USERNAME = "username";
const Inputs: React.FC<{ dispatch: AppDispatch }> = ({ dispatch }) => {
  return (
    <form>
      <label htmlFor={EMAIL_ADDRESS}>
        <span>이메일 주소를 입력해주세요</span>
      </label>
      <input id={EMAIL_ADDRESS} />
      <label htmlFor={USERNAME}>
        <span>유저 이름을 입력해주세요</span>
      </label>
      <input id={USERNAME}></input>
      <button>아이디 만들기 </button>
    </form>
  );
};

export default Inputs;
