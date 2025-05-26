import { initializeApp } from 'firebase/app';
import { 
  getAuth, 
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
import { getAnalytics } from "firebase/analytics";
export const analytics = getAnalytics(app);
const googleProvider = new GoogleAuthProvider();

export const loginWithEmail = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const signUpWithEmail = (email, password) => {
  // You may want to add displayName or other fields as needed
  return getAuth().createUserWithEmailAndPassword
    ? getAuth().createUserWithEmailAndPassword(email, password)
    : import('firebase/auth').then(({ createUserWithEmailAndPassword }) => createUserWithEmailAndPassword(auth, email, password));
};

export const loginWithGoogle = () => {
  return signInWithPopup(auth, googleProvider);
};

export const logout = () => {
  return signOut(auth);
};