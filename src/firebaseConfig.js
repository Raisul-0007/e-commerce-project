import { initializeApp } from "firebase/app";


import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyDVd_ni16vvvbLLyQtv_-yMNDngK8Bp-sk",
  authDomain: "e-commerce-project-f377b.firebaseapp.com",
  projectId: "e-commerce-project-f377b",
  storageBucket: "e-commerce-project-f377b.firebasestorage.app",
  messagingSenderId: "909501624577",
  appId: "1:909501624577:web:0812b723f1c21b5c49eb00",
  measurementId: "G-F5B4JDJEGF"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default firebaseConfig;