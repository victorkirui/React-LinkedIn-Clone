import { auth, provider } from "../firebase";
import { SET_USER } from "./actionTypes";

// action creator is a function that returns an action
export const setUser = (payload) => {
  return {
    type: SET_USER,
    user: payload,
  };
};

// action creator that return a function
export function signInAPI() {
  return (dispatch) => {
    auth
      .signInWithPopup(provider)
      .then((payload) => {
        dispatch(setUser(payload.user));
      })
      .catch((error) => alert(error.message));
  };
}

// an inpure action creator
export function getUserAuth() {
  return (dispatch) => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(setUser(user));
      }
    });
  };
}
