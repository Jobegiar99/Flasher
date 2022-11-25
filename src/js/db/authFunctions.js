import { json } from "react-router-dom";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../../firebaseConfig";

import { CreateDocument, CreateDocumentWithId } from "./dbFunctions";

function axiosPost(data) {
  const config = {
    method: "POST",
    headers: {
      "Access-Control-Allow-Origin": "http://localhost:8080/api/blog",
      "Access-Control-Allow-Headers":
        "POST Authorization, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Access-Control-Allow-Origin",
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(data),
  };

  fetch("http://localhost:8080/api/blog", config)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
}

export async function CreateUser(email, userName, password) {
  try {
    const user = await createUserWithEmailAndPassword(auth, email, password);
    console.log("User: ", user);
    sessionStorage.setItem("Auth Token", user._tokenResponse.refreshToken);
    sessionStorage.setItem("uid", user.user.uid);

    const db = await CreateDocumentWithId(
      "users",
      { email: email, isMod: false, user: userName },
      user.user.uid
    );
    axiosPost({
      eventId: Date.now(),
      eventName: "User Created",
      userId: Date.now(),
      userName: "null",
      eventDescription: "User " + user.user.uid + " created",
    });
    return user;
  } catch {
    axiosPost({
      eventId: Date.now(),
      eventName: "Error at Document Create",
      userId: 0,
      userName: "null",
      eventDescription: "User failed to create",
    });
    console.log("Error Creating User ");
  }
}
export async function SignIn(email, password) {
  try {
    const user = await signInWithEmailAndPassword(auth, email, password);
    console.log("User: ", user);
    sessionStorage.setItem("Auth Token", user._tokenResponse.refreshToken);
    sessionStorage.setItem("uid", user.user.uid);
    axiosPost({
      eventId: 101,
      eventName: "User Signed In",
      userId: Date.now() % 1000000,
      userName: "null",
      eventDescription: "User " + user.user.uid + " signed in",
    });
    return user;
  } catch {
    axiosPost({
      eventId: 100,
      eventName: "User Failed Signed In",
      userId: Date.now() % 1000000,
      userName: "null",
      eventDescription: "User failed to sign in",
    });
    console.log("Error Creating User ");
  }
}

export async function SignOut() {
  try {
    const user = await signOut(auth);
    console.log("User: ", user);
    sessionStorage.removeItem("Auth Token");
    sessionStorage.removeItem("uid");
    axiosPost({
      eventId: 201,
      eventName: "User Signed Out",
      userId: Date.now() % 1000000,
      userName: "null",
      eventDescription: "User " + user.user.uid + " signed out",
    });
    return user;
  } catch {
    axiosPost({
      eventId: 200,
      eventName: "User Failed Signed Out",
      userId: Date.now() % 1000000,
      userName: "null",
      eventDescription: "User failed  tosigned out",
    });
    console.log("Error Creating User ");
  }
}

export async function CheckAuth() {
  try {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        sessionStorage.setItem("Auth Token", user._tokenResponse.refreshToken);
        return user;
      } else {
        console.log("No User");
        return null;
      }
    });
  } catch {
    console.log("Error Checking User ");
  }
}
