export const Actions = {
  ADD_TASK: "ADD_TASK",
  DELETE_TASK: "DELETE_TASK",
};

export const addTask = (task) => {
  return (dispatch) => {
    return dispatch(onAddTask.success(task));
  };
};

export const deleteTask = (task) => {
  return (dispatch) => {
    return dispatch(onDeleteTask.success(task));
  };
};

const onAddTask = {
  request: () => {},
  success: (payload) => {
    return {
      type: Actions.ADD_TASK,
      payload,
    };
  },
};

const onDeleteTask = {
  request: () => {},
  success: (payload) => {
    return {
      type: Actions.DELETE_TASK,
      payload,
    };
  },
};

