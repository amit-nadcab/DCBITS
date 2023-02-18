import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useSelector } from "react-redux";
import "./App.css";
import { Home } from "./Pages/Home";
import { Signup } from "./Pages/Signup";
import { Login } from "./Pages/Login";
import { VerifyEmail } from "./Pages/VerifyEmail";
import { Dashboard } from "./Pages/Dashboard";
import { InvestHistory } from "./Pages/InvestHistory";
import { WithdrawHistory } from "./Pages/WithdrawHistory";
import { Reinvestment } from "./Pages/Reinvestment";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {
  const { user_id, isLoggedIn } = useSelector((state) => state.data.value);
  console.log(user_id, "user_id in app.js file", isLoggedIn);

  const router = createBrowserRouter([
    isLoggedIn ? {
      path: "/",
      element: <Dashboard/>,
    } : {
      path: "/",
      element: <Home/>
    },
    {
      path: "/home",
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
    },{
      path: "/reinvestment",
      element : <Reinvestment/>
    }
  ]);
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
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
