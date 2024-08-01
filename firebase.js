// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, enableIndexedDbPersistence } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9UlpHcCz_IgT8CzGZsX_zGFDYHG_BQ_s",
  authDomain: "pantry-tracker-eb2e6.firebaseapp.com",
  projectId: "pantry-tracker-eb2e6",
  storageBucket: "pantry-tracker-eb2e6.appspot.com",
  messagingSenderId: "1048890701746",
  appId: "1:1048890701746:web:fd5dc3892c5146272596ab",
  measurementId: "G-0G37C7VXHP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firestore
const firestore = getFirestore(app);

// Enable offline persistence (optional)
enableIndexedDbPersistence(firestore)
  .catch((err) => {
    if (err.code === 'failed-precondition') {
      console.log('Persistence failed');
    } else if (err.code === 'unimplemented') {
      console.log('Persistence is not available');
    }
  });

export { firestore };
