import { Navigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AuthContext } from "./AuthProvider";
import { makeLoginUrl } from "./utils";

export function Login() {
  //const authContext = useContext(AuthContext);
  const {auth} = useContext(AuthContext);

  useEffect(() => {
    if (!auth) {
      window.location.href = makeLoginUrl();
    }
  }, [auth]);

  return auth ? <Navigate to="/admin" /> : <div>Loading...</div>
}