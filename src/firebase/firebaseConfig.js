
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCpRfOXHJoLOusB8hDF_D-bqiimyUT7HqY",
  authDomain: "event-management-a08f5.firebaseapp.com",
  projectId: "event-management-a08f5",
  storageBucket: "event-management-a08f5.appspot.com",
  messagingSenderId: "1028797352141",
  appId: "1:1028797352141:web:c3ca5b3cd33eb528054184"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)