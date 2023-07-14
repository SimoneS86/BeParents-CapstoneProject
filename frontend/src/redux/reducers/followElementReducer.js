import { GET_FOLLOWERS_BY_PRO_ID, GET_FOLLOWED_BY_STND_ID } from "../actions/followElement";

const followElementReducer = (state = [], action) => {
  switch (action.type) {
    case GET_FOLLOWERS_BY_PRO_ID:
      return action.payload;
    case GET_FOLLOWED_BY_STND_ID:
      return action.payload;
    default:
      return state;
  }
};

export default followElementReducer;
