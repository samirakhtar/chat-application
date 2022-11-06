import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
import {getStorage} from "firebase/storage";
import {getFirestore} from "firebase/firestore"
import { getAnalytics} from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyBiI4QjsmhON9DUwoRECb3Vplw5A7-OYK8",
  authDomain: "chat-application-b575d.firebaseapp.com",
  projectId: "chat-application-b575d",
  storageBucket: "chat-application-b575d.appspot.com",
  messagingSenderId: "1004842237260",
  appId: "1:1004842237260:web:8f9db54ae654762794e3e9",
  measurementId: "G-2MBMT4903Q"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
export const analytics = getAnalytics(app);
