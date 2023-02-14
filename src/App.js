import {createBrowserRouter,RouterProvider} from "react-router-dom";
import './App.css';
import { Home } from './Pages/Home';
import { Signup } from './Pages/Signup';
import { Login } from "./Pages/Login";



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
    }
  ]);
  return (
    <>
    
     <RouterProvider router={router}/>
    </>

  );
}

export default App;
