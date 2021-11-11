import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import initializeAuth from "./../Firebase/Firebase.init";

const googleProvider = new GoogleAuthProvider();
initializeAuth();

const useFirebase = () => {
  const auth = getAuth();
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [isAuthLoading, setAuthLoading] = useState(true);
  const [isAdminLoading, setIsAdminLoading] = useState(true);
  const [admin, setAdmin] = useState({});

  // google sign in
  const googleSignIn = (history, location) => {
    setAuthLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const redirect_uri = location.state?.from || "/home";
        history.push(redirect_uri);
        const temporaryUser = {
          email: result.user.email,
          name: result.user.displayName,
          photoURL: result.user.photoURL,
        };
        sendUser(temporaryUser, "PUT");
        setError("");
        console.log(result.user);
        Swal.fire("Good job!", "Logged in enjoy", "success");
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: errorMessage,
        });
      })
      .finally(() => {
        setAuthLoading(false);
      });
  };

  //   create user with email and password
  const signUp = (email, password, name, img, history, location) => {
    setAuthLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const temporaryUser = {
          email: email,
          displayName: name,
          photoURL: img,
        };
        setUser(temporaryUser);
        sendUser(temporaryUser, "POST");
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: img,
        });

        const redirect_uri = location.state?.from || "/home";
        history.push(redirect_uri);
        Swal.fire("Good job!", "Registered successful", "success");
        setError("");
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: errorMessage,
        });
      })
      .finally(() => {
        setAuthLoading(false);
      });
  };

  //   signIn with email and password
  const signIn = (email, password, history, location) => {
    setAuthLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const redirect_uri = location.state?.from || "/home";
        history.push(redirect_uri);
        Swal.fire("Good job!", "Logged in successful", "success");
        setError("");
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: errorMessage,
        });
      })
      .finally(() => {
        setAuthLoading(false);
      });
  };

  //   state change functionalities
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        console.log("looged in ", user);
      } else {
        setUser({});
      }
      setAuthLoading(false);
    });

    return () => unsubscribe;
  }, []);

  //   logout functionalities

  const logOut = () => {
    setAuthLoading(true);
    signOut(auth)
      .then(() => {
        setUser({});
        Swal.fire("Successfully logout");
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      })
      .finally(() => {
        setAuthLoading(false);
      });
  };

  // send user information in mongodb
  const sendUser = (userData, method) => {
    fetch("http://localhost:5000/user", {
      method: method,
      headers: { "content-type": "application/json" },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .then((data) => {});
  };

  // check if user is admin user
  useEffect(() => {
    setIsAdminLoading(true);
    fetch(`http://localhost:5000/users/${user.email}`)
      .then((res) => res.json())
      .then((data) => setAdmin(data))
      .finally(() => {
        setIsAdminLoading(false);
      });
  }, [user.email]);

  return {
    googleSignIn,
    signIn,
    signUp,
    logOut,
    isAdminLoading,
    setError,
    admin,
    user,
    error,
    isAuthLoading,
  };
};

export default useFirebase;
