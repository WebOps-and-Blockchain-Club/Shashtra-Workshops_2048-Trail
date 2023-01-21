import { Redirect, Route } from "wouter";

const ProtectedRoute = (props) => {
  return props.auth ? (
    <Route path={props.path} component={props.component} />
  ) : (
    <Redirect to="/" />
  );
};

export default ProtectedRoute;
