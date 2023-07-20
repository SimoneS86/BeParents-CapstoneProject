import { DELETE_REMINDER, GET_REMINDERS, GET_REMINDERS_BY_ID, POST_REMINDER, PUT_REMINDER } from "../actions/reminder";

const remindersReducer = (state = [], action) => {
  switch (action.type) {
    case GET_REMINDERS:
      return action.payload;
    case GET_REMINDERS_BY_ID:
      return action.payload;
    case POST_REMINDER:
      return { ...state, content: [action.payload, ...state.content] };
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
      return { ...state, content: state.content.filter((reminder) => reminder.id !== action.payload) };
    default:
      return state;
  }
};

export default remindersReducer;
