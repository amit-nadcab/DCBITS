import {createBrowserRouter,RouterProvider} from "react-router-dom";
import './App.css';
import { Home } from './Pages/Home';
import { Signup } from './Pages/Signup';


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/signup",
      element: <Signup />
    }
  ]);
  return (
    <>
     <RouterProvider router={router}/>
    </>

  );
}

export default App;
