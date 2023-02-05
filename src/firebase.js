import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDN2GdE6_Gs5nRSdYJalzJ-UTIdV3C-zxk",
  authDomain: "przepisownik-react.firebaseapp.com",
  projectId: "przepisownik-react",
  storageBucket: "przepisownik-react.appspot.com",
  messagingSenderId: "883347014886",
  appId: "1:883347014886:web:608ed81da64de2f9092727",
  measurementId: "G-DKJXFXZ089"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


