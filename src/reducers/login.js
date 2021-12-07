// first thing is set an initial state in the reducer file,
// this state need to be an object that store the data we need it to be global so we can use it in any component
const initialState = {
  token: "",
};
// second we need to write a reducer function that take 2 argument: initialState, action
const logIn = (state = initialState, action) => {
  const { type, payload } = action;
  // after google it..
  //payload: is the actual information or message in transmitted data, as opposed to automatically generated metadata.
  switch (type) {
    case "LOGIN":
      const { token } = payload;
      localStorage.setItem("token", token); //what we need to do
      return { token }; // this is the change we need to return when this case is called

    case "LOGOUT":
      localStorage.clear();
      return { token: "" };

    default:
      return state; //default = initial state
  }
};
export default logIn; // export default so we can use it anywhere we need

// after that we need to define a function to each case that take data as an argument
// this function return action = {type: case, payload: data}
export const login = (data) => {
  return {
    type: "LOGIN",
    payload: data,
  };
};

export const logout = (data) => {
  return {
    type: "LOGOUT",
    payload: data,
  };
};
