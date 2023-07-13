import { DELETE_USER_POST, GET_POSTS, GET_POSTS_BY_ID, POST_USER_POST, PUT_USER_POST } from "../actions/post";

const postsReducer = (state = [], action) => {
  switch (action.type) {
    case GET_POSTS:
      return action.payload;
    case GET_POSTS_BY_ID:
      return action.payload;
    case POST_USER_POST:
      return [action.payload, ...state];
    case PUT_USER_POST:
      return state.map((post) => {
        if (post._id !== action.id) {
          return post;
        }
        return {
          ...action.payload,
        };
      });
    case DELETE_USER_POST:
      return state.filter((post) => post._id !== action.payload);
    default:
      return state;
  }
};

export default postsReducer;
