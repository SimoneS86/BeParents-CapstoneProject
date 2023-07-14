const AUTHORIZATION =
  "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtYXJjb0BleGFtcGxlLmNvbSIsImlhdCI6MTY4OTI1MTAzOCwiZXhwIjoxNjg5ODU1ODM4fQ.OdB3ZwXGBwoqqPPKq-N2jk-89EffiA3MnSGvNT3cA971r-7_8nO7-_2tUSDmnHOG4D-txWQnESTPwUaBj59o2w";
const BASE_POST_URL = "http://localhost:5001/api/post";
//const BASE_POST_URL_PLUS_ID = "http://localhost:5001/api/user/e4e242e2-8945-47dc-b1b3-835b228e46f2/posts";
const BASE_USER_URL = "http://localhost:5001/api/user";

export const GET_POSTS = "GET_POSTS";
export const GET_POSTS_BY_ID = "GET_POSTS_BY_ID";
export const POST_USER_POST = "POST_USER_POST";
export const PUT_USER_POST = "PUT_USER_POST";
export const DELETE_USER_POST = "DELETE_USER_POST";

export const getPosts = () => {
  return async (dispatch) => {
    try {
      let resp = await fetch(`${BASE_POST_URL}`, {
        headers: {
          Authorization: AUTHORIZATION,
        },
      });
      if (resp.ok) {
        let data = await resp.json();
        dispatch({ type: GET_POSTS, payload: data });
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    } finally {
      console.log("fetch loading finish");
    }
  };
};

export const getPostsById = () => {
  return async (dispatch, getState) => {
    const token = getState().auth.token;
    const user = getState().auth.userData;
    try {
      let resp = await fetch(`${BASE_USER_URL}/${user.id}/posts`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (resp.ok) {
        let data = await resp.json();
        dispatch({ type: GET_POSTS_BY_ID, payload: data });
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    } finally {
      console.log("fetch loading finish");
    }
  };
};

export const postUserPost = (userData, postId, body) => {
  return async (dispatch) => {
    try {
      let resp = await fetch(`${BASE_POST_URL}`, {
        method: "POST",
        headers: {
          Authorization: AUTHORIZATION,
          "Content-Type": "application/json",
        },
        body,
      });
      if (resp.ok) {
        let data = await resp.json();
        data.user = userData;
        dispatch({ type: POST_USER_POST, payload: data });
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    } finally {
      console.log("fetch loading finish");
    }
  };
};

export const putUserPost = (userData, postId, body) => {
  return async (dispatch) => {
    try {
      let resp = await fetch(`${BASE_POST_URL}/${postId}`, {
        method: "PUT",
        headers: {
          Authorization: AUTHORIZATION,
          "Content-Type": "application/json",
        },
        body,
      });
      if (resp.ok) {
        let data = await resp.json();
        data.user = userData;
        dispatch({ type: PUT_USER_POST, id: postId, payload: data });
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    } finally {
      console.log("fetch loading finish");
    }
  };
};

export const deleteUserPost = (postId) => {
  return async (dispatch) => {
    try {
      let resp = await fetch(`${BASE_POST_URL}/${postId}`, {
        method: "DELETE",
        headers: {
          Authorization: AUTHORIZATION,
          "Content-Type": "application/json",
        },
      });
      if (resp.ok) {
        dispatch({ type: DELETE_USER_POST, payload: postId });
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    } finally {
      console.log("fetch loading finish");
    }
  };
};
