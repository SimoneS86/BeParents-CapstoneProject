const BASE_REMINDER_URL = "http://localhost:5001/api/reminder";
const BASE_REMINDER_URL_BY_ID = "http://localhost:5001/api/user";

export const GET_REMINDERS = "GET_REMINDERS";
export const GET_REMINDERS_BY_ID = "GET_REMINDERS_BY_ID";
export const POST_REMINDER = "POST_REMINER";
export const PUT_REMINDER = "PUT_REMINDER";
export const DELETE_REMINDER = "DELETE_REMINDER";

export const getReminders = () => {
  return async (dispatch, getState) => {
    const token = getState().auth.token;
    try {
      let resp = await fetch(`${BASE_REMINDER_URL}`, {
        headers: {
          Authorization: `Bearer ${token}`,
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

export const getRemindersById = () => {
  return async (dispatch, getState) => {
    const token = getState().auth.token;
    const user = getState().auth.userData;
    try {
      let resp = await fetch(`${BASE_REMINDER_URL_BY_ID}/${user.id}/reminders`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (resp.ok) {
        let data = await resp.json();
        dispatch({ type: GET_REMINDERS_BY_ID, payload: data });
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

export const postReminder = (userData, body) => {
  return async (dispatch, getState) => {
    const token = getState().auth.token;
    try {
      let resp = await fetch(`${BASE_REMINDER_URL}`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
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
  return async (dispatch, getState) => {
    const token = getState().auth.token;
    try {
      let resp = await fetch(`${BASE_REMINDER_URL}/${reminderId}`, {
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
  return async (dispatch, getState) => {
    const token = getState().auth.token;
    try {
      let resp = await fetch(`${BASE_REMINDER_URL}/${reminderId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
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
