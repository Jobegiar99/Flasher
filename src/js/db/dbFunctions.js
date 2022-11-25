import {
  collection,
  addDoc,
  deleteDoc,
  updateDoc,
  getDocs,
  query,
  onSnapshot,
  getDoc,
  setDoc,
  doc,
} from "firebase/firestore";
import axios from "axios";

import { db } from "../../firebaseConfig";

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

export async function CreateDocument(targetCollection, docData) {
  try {
    const docRef = await addDoc(collection(db, targetCollection), docData);
    axiosPost({
      eventId: 301,
      eventName: "Document Create",
      userId: Date.now() % 1000000,
      userName: "null",
      eventDescription: "Document created in " + targetCollection,
    });
    console.log("DOCUMENT: ", docRef.id);
  } catch {
    axiosPost({
      eventId: 300,
      eventName: "Error at Document Create",
      userId: Date.now() % 1000000,
      userName: "null",
      eventDescription: "Document failed to create in " + targetCollection,
    });
    console.log("Eror Adding " + targetCollection);
  }
}

export async function CreateDocumentWithId(targetCollection, docData, id) {
  try {
    const docRef = await setDoc(doc(db, targetCollection, id), docData);
    axiosPost({
      eventId: 401,
      eventName: "Document Create",
      userId: Date.now() % 1000000,
      userName: "null",
      eventDescription:
        "Document created in " + targetCollection + " with id " + id,
    });
  } catch {
    axiosPost({
      eventId: 400,
      eventName: "Error at Document Create",
      userId: Date.now() % 1000000,
      userName: "null",
      eventDescription: "Document failed to create in " + targetCollection,
    });
    console.log("Eror Adding " + targetCollection);
  }
}

export async function ReadDocument(targetCollection) {
  try {
    let result = null;
    await getDocs(collection(db, targetCollection)).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      result = newData;
    });
    axiosPost({
      eventId: 501,
      eventName: "Read Document",
      userId: Date.now() % 1000000,
      userName: "null",
      eventDescription: "Document read in " + targetCollection,
    });
    return result;
  } catch {
    axiosPost({
      eventId: 500,
      eventName: "Error at Document Create",
      userId: Date.now() % 1000000,
      userName: "null",
      eventDescription: "Document failed to create in " + targetCollection,
    });
    return null;
  }
}

export async function UpdateDocument(
  targetCollection,
  targetDocument,
  updatedData
) {
  try {
    const docRef = await doc(db, targetCollection + "/" + targetDocument);
    const updatedRef = await updateDoc(docRef, updatedData);
    console.log("Updated Document: ", docRef.id);
    axiosPost({
      eventId: 601,
      eventName: "Update Document",
      userId: Date.now() % 1000000,
      userName: "null",
      eventDescription: "Document updated in " + targetCollection,
    });
  } catch {
    axiosPost({
      eventId: 600,
      eventName: "Error at Document Update",
      userId: Date.now() % 1000000,
      userName: "null",
      eventDescription: "Document failed to update in " + targetCollection,
    });
    console.log("Eror updating " + targetDocument);
  }
}

export async function DeleteDocument(targetCollection, targetDocument) {
  try {
    const docRef = await doc(db, targetCollection + "/" + targetDocument);
    await deleteDoc(docRef);
    axiosPost({
      eventId: 701,
      eventName: "Delete Document",
      userId: Date.now() % 1000000,
      userName: "null",
      eventDescription: "Document deleted in " + targetCollection,
    });
    console.log("Deleted Document with ID ", targetDocument);
  } catch {
    axiosPost({
      eventId: 700,
      eventName: "Error at Document Delete",
      userId: Date.now() % 1000000,
      userName: "null",
      eventDescription: "Document delete to update in " + targetCollection,
    });
    console.log("Eror deleting " + targetDocument);
  }
}
