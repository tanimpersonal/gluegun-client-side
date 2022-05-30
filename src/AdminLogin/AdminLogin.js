import React, { useRef } from "react";
import {
  useAuthState,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";

import { useLocation, useNavigate } from "react-router-dom";
import auth from "../firebase.init";

const AdminLogin = () => {
  const email = useRef("");

  const password = useRef("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const [adminUser, adminLoading] = useAuthState(auth);
  if (adminUser?.displayName === "admin") {
    navigate(from, { replace: true });
  }
  const handleAdmin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(email.current.value, password.current.value);
  };
  return (
    <div>
      <form onSubmit={handleAdmin}>
        <input className="p-5" ref={email} type="email" placeholder="email" />
        <input
          type="password"
          className="p-5"
          name=""
          ref={password}
          placeholder="Enter password"
          id=""
        />
        <input type="submit" value="Admin Login" />
      </form>
    </div>
  );
};

export default AdminLogin;
