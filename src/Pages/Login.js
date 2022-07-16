import React from "react";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = ({isAuth, setIsAuth}) => {
  const navigate = useNavigate();
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((info) => {
      localStorage.setItem("isAuth", true);
      navigate('/');
      setIsAuth(true);
      console.log("isAuth = ",isAuth);
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
