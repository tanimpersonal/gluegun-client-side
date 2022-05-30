import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../firebase.init";

const RequireAdminAuth = ({ children }) => {
  const [user, loading, error] = useAuthState(auth);
  const location = useLocation();
  if (!user && user.displayName !== "admin") {
    return <Navigate to="/admin" state={{ from: location }} replace />;
  }
  return children;
};

export default RequireAdminAuth;
