import {
  DELETE_USER_POST,
  DELETE_USER_COMMENT,
  GET_POSTS,
  GET_POSTS_BY_ID,
  POST_USER_POST,
  POST_USER_COMMENT,
  PUT_USER_POST,
  PUT_USER_COMMENT,
} from "../actions/post";

const initialState = null;

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return action.payload;
    case GET_POSTS_BY_ID:
      return action.payload;
    case POST_USER_POST:
      return { ...state, content: [action.payload, ...state.content] };
    case POST_USER_COMMENT:
      return {
        ...state,
        comments: state.comments ? [action.payload, ...state.comments] : [action.payload],
      };
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
    case PUT_USER_COMMENT:
      return {
        ...state,
        content: state.content.map((comment) => {
          if (comment.id !== action.id) {
            return comment;
          }
          return {
            ...comment,
            ...action.payload,
          };
        }),
      };
    case DELETE_USER_POST:
      return { ...state, content: state.content.filter((post) => post.id !== action.payload) };
    case DELETE_USER_COMMENT:
      return { ...state, content: state.content.filter((comment) => comment.id !== action.payload) };
    case "RESET_POSTS":
      return initialState;
    default:
      return state;
  }
};

export default postsReducer;
