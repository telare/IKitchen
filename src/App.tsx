import "./App.css";
import LoginPage from "./components/authPages/logIn/LoginPage";
import SignInPage from "./components/authPages/signIn/SignInPage";
import HomePage from './components/HomePage/HomePage'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage />,
    },
    {
      path: "/signin",
      element: <SignInPage />,
    },
    {
      path: "/home",
      element: <HomePage />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
