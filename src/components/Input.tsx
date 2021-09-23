import React, { useState } from "react";
import { useGetContext } from "../AppContext";

const Input: React.FC<{}> = () => {
  const { dispatch } = useGetContext();
  const [value, setValue] = useState("");
  const [ageValue, setAgeValue] = useState<string>("");
  const NAME_LABEL = "name";
  const AGE_LABEL = "age";
  return (
    <div>
      <label htmlFor={NAME_LABEL}>이름을 입력해주세요</label>
      <input
        id={NAME_LABEL}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      ></input>
      <button
        onClick={() => {
          dispatch({ type: "FILTER_BY_NAME", name: value });
          dispatch({ type: "COUNT" });
        }}
      >
        filter by name
      </button>
      <label htmlFor={AGE_LABEL}>나이를 입력해주세요</label>
      <input
        id={AGE_LABEL}
        value={ageValue.toString()}
        onChange={(e) => setAgeValue(e.target.value)}
      ></input>
      <button
        onClick={() => {
          dispatch({ type: "FILTER_BY_AGE", limit: parseInt(ageValue) });
          dispatch({ type: "COUNT" });
        }}
      >
        {" "}
        filter by age{" "}
      </button>
      <button
        onClick={() => {
          dispatch({ type: "RESET" });
        }}
      >
        {" "}
        RESET{" "}
      </button>
    </div>
  );
};

export default Input;
