import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAb4fF0AXVlVWLWhDABeBJHILVQVjh3Lbg",
    authDomain: "trimble-62b84.firebaseapp.com",
    projectId: "trimble-62b84",
    storageBucket: "trimble-62b84.appspot.com",
    messagingSenderId: "188639592303",
    appId: "1:188639592303:web:0fd649eb21fc867565f29a"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const name = result.user.displayName;
      const email = result.user.email;
      const profilePic = result.user.photoURL;

      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("profilePic", profilePic);
    })
    .catch((error) => {
      console.log(error);
    });
};