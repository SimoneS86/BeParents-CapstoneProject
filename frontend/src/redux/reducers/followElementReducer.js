import {
  GET_FOLLOWERS_BY_PRO_ID,
  GET_FOLLOWED_BY_STND_ID,
  FOLLOW_USER,
  DELETE_FOLLOWED_USER,
} from "../actions/followElement";

const followElementReducer = (state = null, action) => {
  switch (action.type) {
    case GET_FOLLOWERS_BY_PRO_ID:
      return action.payload;
    case GET_FOLLOWED_BY_STND_ID:
      return action.payload;
    case FOLLOW_USER:
      return { ...state, content: [...state.content, action.payload] };
    case DELETE_FOLLOWED_USER:
      return { ...state, content: state.content.filter((follow) => follow.id !== action.payload) };
    default:
      return state;
  }
};

export default followElementReducer;
