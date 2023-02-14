import {createBrowserRouter,RouterProvider} from "react-router-dom";
import './App.css';
import { Home } from './Pages/Home';
import { Signup } from './Pages/Signup';
import { Login } from "./Pages/Login";
import { Dashboard } from "./Pages/Dashboard";



function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/signup",
      element: <Signup />
    },
    {
      path: "/login",
      element: <Login/>
    },
    {
      path: "/dashboard",
      element: <Dashboard/>
    }
  ]);
  return (
    <>
    
     <RouterProvider router={router}/>
    </>

  );
}

export default App;
