import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { Home } from "./Pages/Home";
import { Signup } from "./Pages/Signup";
import { Login } from "./Pages/Login";
import { VerifyEmail } from "./Pages/VerifyEmail";
import { Dashboard } from "./Pages/Dashboard";
import { InvestHistory } from "./Pages/InvestHistory";
import { WithdrawHistory } from "./Pages/WithdrawHistory";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/verifyEmail",
      element: <VerifyEmail />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
    {
      path: "/investHistory",
      element: <InvestHistory/>
    },
    {
      path: "/withdrawHistory",
      element: <WithdrawHistory/>
    }
  ]);
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
