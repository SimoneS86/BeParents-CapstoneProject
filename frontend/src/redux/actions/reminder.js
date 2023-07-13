const AUTHORIZATION =
  "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtYXJjb0BleGFtcGxlLmNvbSIsImlhdCI6MTY4OTI1MTAzOCwiZXhwIjoxNjg5ODU1ODM4fQ.OdB3ZwXGBwoqqPPKq-N2jk-89EffiA3MnSGvNT3cA971r-7_8nO7-_2tUSDmnHOG4D-txWQnESTPwUaBj59o2w";
const BASE_REMINDER_URL = "http://localhost:5001/api/reminder";

export const GET_REMINDERS = "GET_REMINDERS";
export const POST_REMINDER = "POST_REMINER";
export const PUT_REMINDER = "PUT_REMINDER";
export const DELETE_REMINDER = "DELETE_REMINDER";

export const getReminders = () => {
  return async (dispatch) => {
    try {
      let resp = await fetch(`${BASE_REMINDER_URL}`, {
        headers: {
          Authorization: AUTHORIZATION,
        },
      });
      if (resp.ok) {
        let data = await resp.json();
        dispatch({ type: GET_REMINDERS, payload: data });
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

export const postReminder = (userData, reminderId, body) => {
  return async (dispatch) => {
    try {
      let resp = await fetch(`${BASE_REMINDER_URL}`, {
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
        dispatch({ type: POST_REMINDER, payload: data });
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

export const putReminder = (userData, reminderId, body) => {
  return async (dispatch) => {
    try {
      let resp = await fetch(`${BASE_REMINDER_URL}/${reminderId}`, {
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
        dispatch({ type: PUT_REMINDER, id: reminderId, payload: data });
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

export const deleteReminder = (reminderId) => {
  return async (dispatch) => {
    try {
      let resp = await fetch(`${BASE_REMINDER_URL}/${reminderId}`, {
        method: "DELETE",
        headers: {
          Authorization: AUTHORIZATION,
          "Content-Type": "application/json",
        },
      });
      if (resp.ok) {
        dispatch({ type: DELETE_REMINDER, payload: reminderId });
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
