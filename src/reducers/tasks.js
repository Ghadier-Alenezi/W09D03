const initialState = {
  allTasks: [],
};
const getAllTasks = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "GETTASKS":
      const { allTasks } = payload;
      return { allTasks };

    default:
      return state;
  }
};
export default getAllTasks;

export const getTasks = (data) => {
  return {
    type: "GETTASKS",
    payload: data,
  };
};
