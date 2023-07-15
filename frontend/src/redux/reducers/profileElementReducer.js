import { DELETE_USER, GET_USERS, GET_USER_BY_ID, POST_USER, PUT_USER } from "../actions/profileElement";

const profileElementReducer = (state = [], action) => {
  switch (action.type) {
    case GET_USERS:
      return action.payload;
    case GET_USER_BY_ID:
      return action.payload;
    case POST_USER:
      return [action.payload, ...state];
    case PUT_USER:
      return state.map((post) => {
        if (post._id !== action.id) {
          return post;
        }
        return {
          ...action.payload,
        };
      });
    case DELETE_USER:
      return state.filter((post) => post._id !== action.payload);
    default:
      return state;
  }
};

export default profileElementReducer;
