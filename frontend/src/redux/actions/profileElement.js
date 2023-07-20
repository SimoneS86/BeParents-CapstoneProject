const BASE_USER_URL = "http://localhost:5001/api/user";

export const GET_USERS = "GET_USERS";
export const GET_USER_BY_ID = "GET_USER_BY_ID";
export const POST_USER = "POST_USER";
export const PUT_USER = "PUT_USER";
export const DELETE_USER = "DELETE_USER";

export const getUsers = () => {
  return async (dispatch, getState) => {
    const token = getState().auth.token;
    try {
      let resp = await fetch(`${BASE_USER_URL}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (resp.ok) {
        let data = await resp.json();
        dispatch({ type: GET_USERS, payload: data });
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

export const getUserById = (userId) => {
  return async (dispatch, getState) => {
    const token = getState().auth.token;
    try {
      let resp = await fetch(`${BASE_USER_URL}/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (resp.ok) {
        let data = await resp.json();
        dispatch({ type: GET_USER_BY_ID, payload: data });
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

// export const postUser = (userData, userId, body) => {
//   return async (dispatch, getState) => {
//     const token = getState().auth.token;
//     try {
//       let resp = await fetch(`${BASE_USER_URL}/${userId}`, {
//         method: "POST",
//         headers: {
//           Authorization: `Bearer ${token}`,
//           "Content-Type": "application/json",
//         },
//         body,
//       });
//       if (resp.ok) {
//         let data = await resp.json();
//         data.user = userData;
//         dispatch({ type: POST_USER, payload: data });
//       } else {
//         console.log("error");
//       }
//     } catch (error) {
//       console.log(error);
//     } finally {
//       console.log("fetch loading finish");
//     }
//   };
// };

export const putUser = (userData, userId, body) => {
  return async (dispatch, getState) => {
    const token = getState().auth.token;
    try {
      let resp = await fetch(`${BASE_USER_URL}/${userId}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body,
      });
      if (resp.ok) {
        let data = await resp.json();
        data.user = userData;
        dispatch({ type: PUT_USER, id: userId, payload: data });
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

export const deleteUser = (userId) => {
  return async (dispatch, getState) => {
    const token = getState().auth.token;
    try {
      let resp = await fetch(`${BASE_USER_URL}/${userId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      if (resp.ok) {
        dispatch({ type: DELETE_USER, payload: userId });
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
