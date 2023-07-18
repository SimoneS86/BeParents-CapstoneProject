import { USER_LOGIN, USER_LOGOUT, GET_USER_DATA, POST_STANDARDUSER, POST_PROFESSIONALUSER } from "../actions/auth";
//const initialState = ;
const authReducer = (state = { token: null, userData: null }, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        token: action.payload,
      };
    case USER_LOGOUT:
      return {
        ...state,
        token: null,
        userData: null,
      };
    case GET_USER_DATA:
      return {
        ...state,
        userData: action.payload,
      };
    case POST_STANDARDUSER:
      return {
        ...state,
        userData: action.payload,
      };
    case POST_PROFESSIONALUSER:
      return {
        ...state,
        userData: action.payload,
      };
    // case GET_POSTS_BY_ID:
    //   return action.payload;
    // case POST_USER_POST:
    //   return [action.payload, ...state];
    // case PUT_USER_POST:
    //   return state.map((post) => {
    //     if (post._id !== action.id) {
    //       return post;
    //     }
    //     return {
    //       ...action.payload,
    //     };
    //   });
    // case DELETE_USER_POST:
    //   return state.filter((post) => post._id !== action.payload);
    default:
      return state;
  }
};

export default authReducer;
