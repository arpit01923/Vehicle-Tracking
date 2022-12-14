import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const RequiredAuth = ({ children }) => {
  const { isLoggedIn } = useSelector((state) => state.auth);
  console.log(isLoggedIn);
  return <>{isLoggedIn ? <div>{children}</div> : <Navigate to="/login" />}</>;
};

export default RequiredAuth;
