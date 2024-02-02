import { useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

export function Callback() {
  const { hash } = useLocation(); // Hash is the information after the # in the URL
  const { login, auth } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {

    if (auth) {
      navigate("/login");
      return;
    }

    const searchParams = new URLSearchParams(hash.replace("#", ""));
    const accessToken = searchParams.get("access_token") as string;
    const idToken = searchParams.get("id_token") as string;
    const state = searchParams.get("state") as string;

    if (!accessToken || !idToken || !state) {
      navigate("/login");
    }

    console.log(hash);

    login(accessToken, idToken, state);
    console.log('deu certo');
    //login

  }, [hash, login, auth, navigate]);


  return (
    <div>
      Loading...
    </div>
  )
}