
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCVq4G_25p2IDb7t23K_YLbE1opk-Z1kPE",
    authDomain: "oasisdental-25-dec-23-a309e.firebaseapp.com",
    projectId: "oasisdental-25-dec-23-a309e",
    storageBucket: "oasisdental-25-dec-23-a309e.appspot.com",
    messagingSenderId: "355754762591",
    appId: "1:355754762591:web:af20970cc82cc9647a16ea",
    measurementId: "G-K4YNPB1L4L"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;


