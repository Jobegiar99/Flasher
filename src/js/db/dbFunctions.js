import {collection, addDoc,deleteDoc,updateDoc,getDocs, query, onSnapshot, getDoc, doc} from "firebase/firestore";
import { json } from "react-router-dom";


import db from "../../firebaseConfig";

export async function CreateDocument(targetCollection,docData){
    try{
        const docRef = await addDoc(
                collection(db,targetCollection),
                docData
            );
        console.log("DOCUMENT: ", docRef.id);
    }catch
    {
        console.log("Eror Adding " + targetCollection)
    }
}

export async function ReadDocument(targetCollection){
    try{
        let result = null;
        await getDocs(collection(db,targetCollection))
            .then((querySnapshot)=>{
                const newData = querySnapshot.docs.map(
                    (doc)=>(
                        {...doc.data(),id:doc.id}
                    ))
                result = newData;    
                });
        return result;
    }
    catch
    {
        return null;
    }
}

export async function UpdateDocument(targetCollection, targetDocument, updatedData){
    try
    {
        const docRef = await doc(db,targetCollection + "/" +targetDocument)
        const updatedRef = await updateDoc(docRef,updatedData)
        console.log("Updated Document: ", docRef.id);
    }
    catch
    {
        console.log("Eror updating " + targetDocument)
    }
}

export async function DeleteDocument(targetCollection,targetDocument){
    try
    {
        
        const docRef = await doc(db,targetCollection + "/" +targetDocument)
        await deleteDoc(docRef)
        console.log("Deleted Document with ID ", targetDocument);
    }
    catch
    {
        console.log("Eror deleting " + targetDocument)
    }
}