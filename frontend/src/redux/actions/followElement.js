const AUTHORIZATION =
  "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtYXJjb0BleGFtcGxlLmNvbSIsImlhdCI6MTY4OTI1MTAzOCwiZXhwIjoxNjg5ODU1ODM4fQ.OdB3ZwXGBwoqqPPKq-N2jk-89EffiA3MnSGvNT3cA971r-7_8nO7-_2tUSDmnHOG4D-txWQnESTPwUaBj59o2w";
const BASE_FOLLOWER_URL_PLUS_PRO_ID =
  "http://localhost:5001/api/professionalUser/e4e242e2-8945-47dc-b1b3-835b228e46f2/followers";
const BASE_FOLLOWED_URL_PLUS_STND_ID =
  "http://localhost:5001/api/standardUser/46d9aa98-f9ac-45ec-9741-de887fe93616/followed";

export const GET_FOLLOWERS_BY_PRO_ID = "GET_FOLLOWERS_BY_PRO_ID";
// export const POST_FOLLOWER = "POST_FOLLOWER";
// export const PUT_FOLLOWER = "PUT_FOLLOWER";
// export const DELETE_FOLLOWER = "DELETE_FOLLOWER";

export const GET_FOLLOWED_BY_STND_ID = "GET_FOLLOWED_BY_PRO_ID";
// export const POST_FOLLOWED = "POST_FOLLOWED";
// export const PUT_FOLLOWED = "PUT_FOLLOWED";
// export const DELETE_FOLLOWED = "DELETE_FOLLOWED";

export const getFollowersByProId = () => {
  return async (dispatch) => {
    try {
      let resp = await fetch(`${BASE_FOLLOWER_URL_PLUS_PRO_ID}`, {
        headers: {
          Authorization: AUTHORIZATION,
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
  return async (dispatch) => {
    try {
      let resp = await fetch(`${BASE_FOLLOWED_URL_PLUS_STND_ID}`, {
        headers: {
          Authorization: AUTHORIZATION,
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
