import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Login } from "./Login";
import { Logout } from "./Logout";
import { Callback } from "./Callback";


const router = createBrowserRouter([
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "logout",
    element: <Logout />,
  },
  {
    path: "callback",
    element: <Callback />,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;