const initialState = {
  allTasks: null,
};
const taskReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "GETTASKS":
      const { allTasks } = payload;
      return { allTasks };
    case "CREATE":
      const { newTask } = payload;
      return { allTasks };
    case "UPDATE":
      const { updeateTask } = payload;
      return { allTasks };
    case "DELETE":
      const { deleteTask } = payload;
      return { allTasks };

    default:
      return state;
  }
};
export default taskReducer;

export const getTasks = (data) => {
      // console.log("data", data);

  return {
    type: "GETTASKS",
    payload: data.data,
  };
};

export const newTask = (data) => {
  return {
    type: "CREATE",
    payload: data,
  };
};

export const updateTask = (data) => {
  // return {
  //   type: "UPDATE",
  //   payload: data,
  // };
};

export const deleteTask = (data) => {
  return {
    type: "DELETE",
    payload: "",
  };
};