import { GET_USERS, GET_USER_BY_ID } from "../actions/profileElement";

const profileElementReducer = (state = [], action) => {
  switch (action.type) {
    case GET_USERS:
      return action.payload;
    case GET_USER_BY_ID:
      return action.payload;

    default:
      return state;
  }
};

export default profileElementReducer;
