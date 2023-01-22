import { useState } from "react";
import { Redirect, Route } from "wouter";


const ProtectedRoute = (props) => {

  const isLoggedIn = useState(localStorage.getItem("token") !== null ? true : false)[0]

  return isLoggedIn ? (
    <Route path={props.path} component={props.component} />
  ) : (
    <Redirect to="/" />
  );
};

export default ProtectedRoute;
