// const AUTHORIZATION =
//   "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtYXJjb0BleGFtcGxlLmNvbSIsImlhdCI6MTY4OTI1MTAzOCwiZXhwIjoxNjg5ODU1ODM4fQ.OdB3ZwXGBwoqqPPKq-N2jk-89EffiA3MnSGvNT3cA971r-7_8nO7-_2tUSDmnHOG4D-txWQnESTPwUaBj59o2w";
const BASE_URL = "http://localhost:5001/api";
const BASE_STANDARDUSER_URL = "http://localhost:5001/api/auth/register/standardUser";
const BASE_PROFESSIONALUSER_URL = "http://localhost:5001/api/auth/register/professionalUser";

export const USER_LOGIN = "USER_LOGIN";
export const USER_LOGOUT = "USER_LOGOUT";
export const GET_USER_DATA = "GET_USER_DATA";
export const POST_STANDARDUSER = "POST_STANDARDUSER";
export const POST_PROFESSIONALUSER = "POST_PROFESSIONALUSER";

export const logout = () => ({ type: USER_LOGOUT });

export const login = (body) => {
  return async (dispatch) => {
    try {
      let resp = await fetch(`${BASE_URL}/auth/login`, {
        method: "POST",
        headers: {
          //Authorization: AUTHORIZATION,
          "Content-Type": "application/json",
        },
        body,
      });
      if (resp.ok) {
        let data = await resp.json();
        dispatch({ type: USER_LOGIN, payload: data.accessToken });
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    } finally {
      console.log("fetch loading finish");
    }
  };
};

export const getUserData = () => {
  return async (dispatch, getState) => {
    const token = getState().auth.token;
    try {
      let resp = await fetch(`${BASE_URL}/user/me`, {
        //   method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        //   body,
      });
      if (resp.ok) {
        let data = await resp.json();
        dispatch({ type: GET_USER_DATA, payload: data });
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

export const postStandardUser = (body) => {
  return async (dispatch) => {
    try {
      let resp = await fetch(`${BASE_STANDARDUSER_URL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      if (resp.ok) {
        let data = await resp.json();
        dispatch({ type: POST_STANDARDUSER, payload: data });
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

export const postProfessionalUser = (body) => {
  return async (dispatch) => {
    try {
      let resp = await fetch(`${BASE_PROFESSIONALUSER_URL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      if (resp.ok) {
        let data = await resp.json();
        dispatch({ type: POST_PROFESSIONALUSER, payload: data });
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
