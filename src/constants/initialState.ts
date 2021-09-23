const initialState = {
  users: [
    {
      id: 1,
      username: "Kim",
      age: 20,
      active: false,
    },
    {
      id: 2,
      username: "Lee",
      age: 30,
      active: false,
    },
    {
      id: 3,
      username: "Choi",
      age: 50,
      active: false,
    },
  ],
  inputs: {
    username: "",
    age: 0,
  },
  count: 3,
};

export default initialState;
