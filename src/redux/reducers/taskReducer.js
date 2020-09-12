import { Actions } from "../actions/taskActions";

const initialState = {
  data: [],
  isFetched: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case Actions.ADD_TASK:
      return {
        ...state,
        data: [...state.data, action.payload],
        isFetched: true,
      };
    case Actions.DELETE_TASK:
      return {
        ...state,
        data: [
          ...state.data.filter((task) => task !== action.payload),
        ],
        isFetched: true,
      };
    default:
      return state;
  }
};
