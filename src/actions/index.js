// import { upload } from "@testing-library/user-event/dist/upload";
import { auth, provider, storage } from "../firebase";
import db from "../firebase";
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

export function signOutAPI() {
  return (dispatch) => {
    auth
      .signOut()
      .then(() => {
        dispatch(setUser(null));
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
}

export function postArticleAPI(payload) {
  return (dispatch) => {
    if (payload.image !== "") {
      const upload = storage
        .ref(`images/${payload.image.name}`)
        .put(payload.image);
      upload.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

          console.log(`progress: ${progress}%`);

          if (snapshot.state === "RUNNING") {
            console.log(`progress: ${progress}%`);
          }
        },
        (error) => console.log(error.code),
        async () => {
          const downloadURL = await upload.snapshot.ref.getDownloadURL();
          db.collection("articles").add({
            actor: {
              description: payload.user.email,
              title: payload.user.displayName,
              date: payload.timestamp,
              image: payload.user.photoURL,
            },
            video: {
              video: payload.video,
              sharedImg: downloadURL,
              comments: 0,
              decription: payload.description,
            },
          });
        }
      );
    }
  };
}
