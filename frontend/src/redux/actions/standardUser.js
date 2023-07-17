// const BASE_STANDARDUSER_URL = "http://localhost:5001/api/standardUser";

// export const POST_STANDARDUSER = "POST_STANDARDUSER";

// export const postStandardUser = (body) => {
//   return async (dispatch) => {
//     try {
//       let resp = await fetch(`${BASE_STANDARDUSER_URL}`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body,
//       });
//       if (resp.ok) {
//         let data = await resp.json();
//         dispatch({ type: POST_STANDARDUSER, payload: data });
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
