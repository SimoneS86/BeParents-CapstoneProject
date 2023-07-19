import { DELETE_USER_POST, GET_POSTS, GET_POSTS_BY_ID, POST_USER_POST, PUT_USER_POST } from "../actions/post";

const postsReducer = (state = null, action) => {
  switch (action.type) {
    case GET_POSTS:
      return action.payload;
    case GET_POSTS_BY_ID:
      return action.payload;
    case POST_USER_POST:
      return { ...state, content: [action.payload, ...state.content] };
    case PUT_USER_POST:
      return {
        ...state,
        content: state.content.map((post) => {
          if (post.id !== action.id) {
            return post;
          }
          return {
            ...post,
            ...action.payload,
          };
        }),
      };

    case DELETE_USER_POST:
      return { ...state, content: state.content.filter((post) => post.id !== action.payload) };
    default:
      return state;
  }
};

export default postsReducer;
