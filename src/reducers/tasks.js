const initialState = {
  allTasks: [],
};
const tasksReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "GET":
      const { allTasks } = payload;
      return { allTasks };
    // case "ADD":
    //   const { allTasks } = payload;
    //   return { allTasks };
    // case "DELETE":
    //   const { allTasks } = payload;
    //   return { allTasks };
    // case "UPDATE":
    //   const { allTasks } = payload;
    //   return { allTasks };
    default:
      return state;
  }
};
export default tasksReducer;

export const getTasks = (data) => {
  return {
    type: "GETTASKS",
    payload: data,
  };
};
// export const getTasks = (data) => {
//   return {
//     type: "GETTASKS",
//     payload: data,
//   };
// };
// export const getTasks = (data) => {
//   return {
//     type: "GETTASKS",
//     payload: data,
//   };
// };
// export const getTasks = (data) => {
//   return {
//     type: "GETTASKS",
//     payload: data,
//   };
// };
