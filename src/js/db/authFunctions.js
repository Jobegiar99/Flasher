import { json } from "react-router-dom";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../../firebaseConfig";

import { CreateDocument, CreateDocumentWithId } from "./dbFunctions";

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
    return user;
  } catch {
    console.log("Error Creating User ");
  }
}
export async function SignIn(email, password) {
  try {
    const user = await signInWithEmailAndPassword(auth, email, password);
    console.log("User: ", user);
    sessionStorage.setItem("Auth Token", user._tokenResponse.refreshToken);
    sessionStorage.setItem("uid", user.user.uid);
    return user;
  } catch {
    console.log("Error Creating User ");
  }
}

export async function SignOut() {
  try {
    const user = await signOut(auth);
    console.log("User: ", user);
    sessionStorage.removeItem("Auth Token");
    sessionStorage.removeItem("uid");
    return user;
  } catch {
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
