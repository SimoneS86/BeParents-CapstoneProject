import { DELETE_REMINDER, GET_REMINDERS, POST_REMINDER, PUT_REMINDER } from "../actions/reminder";

const remindersReducer = (state = [], action) => {
  switch (action.type) {
    case GET_REMINDERS:
      return action.payload;
    case POST_REMINDER:
      return [action.payload, ...state];
    case PUT_REMINDER:
      return state.map((post) => {
        if (post._id !== action.id) {
          return post;
        }
        return {
          ...action.payload,
        };
      });
    case DELETE_REMINDER:
      return state.filter((post) => post._id !== action.payload);
    default:
      return state;
  }
};

export default remindersReducer;
