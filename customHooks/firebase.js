// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-ksM0K3wXcmScH0gbZhDiLp6qxNh2l48",
  authDomain: "everybookdotcom.firebaseapp.com",
  projectId: "everybookdotcom",
  storageBucket: "everybookdotcom.appspot.com",
  messagingSenderId: "452544815412",
  appId: "1:452544815412:web:9c0c8a0439b0e36f9b0561",
  measurementId: "G-DVBKFTF4GG",
  databaseURL :"https://everybookdotcom-default-rtdb.asia-southeast1.firebasedatabase.app"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app