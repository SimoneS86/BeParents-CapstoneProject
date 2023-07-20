import { DELETE_USER, GET_USERS, GET_USER_BY_ID, PUT_USER } from "../actions/profileElement";

const profileElementReducer = (state = [], action) => {
  switch (action.type) {
    case GET_USERS:
      return action.payload;
    case GET_USER_BY_ID:
      return action.payload;
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
      return { ...state, token: null, userData: null };
    default:
      return state;
  }
};

export default profileElementReducer;
