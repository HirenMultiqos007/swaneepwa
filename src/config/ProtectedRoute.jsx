import React, { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { checkLocalStore } from "../helpers/localstore";
import { useSelector } from "react-redux";

const ProtectedRoute = () => {
  // const userAvailable = checkLocalStore('userToken')

  const { isLogin, authToken } = useSelector((action) => action.AuthSlice);
  // const user = localStorage.getItem("userToken")

//   return isLogin && authToken 
//   ? <Outlet /> : <Navigate to="/" replace />;
     return  <Outlet />
};

export default ProtectedRoute;
