import React from "react";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";

const Login = () => {
  const signInWithGoogle = ({ setIsAuth }) => {
    signInWithPopup(auth, provider).then((info) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
    });
  };

  return (
    <div className="loginPage">
      <h2>Login Page</h2>
      <p>Sign in with Google</p>
      <button className="logon-with-google-button" onClick={signInWithGoogle}>Sign in with Google</button>
    </div>
  );
};

export default Login;
