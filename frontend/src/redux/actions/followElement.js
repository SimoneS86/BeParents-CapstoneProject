const BASE_FOLLOWER_URL_PLUS_PRO_ID = "http://localhost:5001/api/professionalUser";
const BASE_FOLLOWED_URL_PLUS_STND_ID = "http://localhost:5001/api/standardUser";

export const GET_FOLLOWERS_BY_PRO_ID = "GET_FOLLOWERS_BY_PRO_ID";
export const FOLLOW_USER = "FOLLOW_USER";
export const DELETE_FOLLOWED_USER = "DELETE_FOLLOWED_USER";
// export const POST_FOLLOWER = "POST_FOLLOWER";
// export const PUT_FOLLOWER = "PUT_FOLLOWER";
// export const DELETE_FOLLOWER = "DELETE_FOLLOWER";

export const GET_FOLLOWED_BY_STND_ID = "GET_FOLLOWED_BY_STND_ID";
// export const POST_FOLLOWED = "POST_FOLLOWED";
// export const PUT_FOLLOWED = "PUT_FOLLOWED";
// export const DELETE_FOLLOWED = "DELETE_FOLLOWED";

export const followUser = (userId) => {
  return async (dispatch, getState) => {
    const token = getState().auth.token;
    const user = getState().auth.userData;
    try {
      let resp = await fetch(`${BASE_FOLLOWED_URL_PLUS_STND_ID}/${user.id}/follow/${userId}`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (resp.ok) {
        let data = await resp.json();
        dispatch({ type: FOLLOW_USER, payload: data });
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

export const unFollowUser = (userId) => {
  return async (dispatch, getState) => {
    const token = getState().auth.token;
    const user = getState().auth.userData;
    try {
      let resp = await fetch(`${BASE_FOLLOWED_URL_PLUS_STND_ID}/${user.id}/follow/${userId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (resp.ok) {
        dispatch({ type: DELETE_FOLLOWED_USER, payload: userId });
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

export const unFollowUserStnd = (userId) => {
  return async (dispatch, getState) => {
    const token = getState().auth.token;
    const user = getState().auth.userData;
    try {
      let resp = await fetch(`${BASE_FOLLOWER_URL_PLUS_PRO_ID}/${userId}/follow/${user.id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (resp.ok) {
        dispatch({ type: DELETE_FOLLOWED_USER, payload: userId });
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

export const getFollowersByProId = () => {
  return async (dispatch, getState) => {
    const token = getState().auth.token;
    const user = getState().auth.userData;
    try {
      let resp = await fetch(`${BASE_FOLLOWER_URL_PLUS_PRO_ID}/${user.id}/followers`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (resp.ok) {
        let data = await resp.json();
        dispatch({ type: GET_FOLLOWERS_BY_PRO_ID, payload: data });
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

export const getFollowedByStndId = () => {
  return async (dispatch, getState) => {
    const token = getState().auth.token;
    const user = getState().auth.userData;
    try {
      let resp = await fetch(`${BASE_FOLLOWED_URL_PLUS_STND_ID}/${user.id}/followed`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (resp.ok) {
        let data = await resp.json();
        dispatch({ type: GET_FOLLOWED_BY_STND_ID, payload: data });
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
