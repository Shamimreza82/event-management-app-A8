import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import Services from "../Pages/Services";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import About from "../Pages/About";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <ErrorPage></ErrorPage>, 
      children: [
        {
            path: "/",
            element: <Home></Home>,
        }, 
        {
            path: "/services",
            element: <Services></Services>,
        }, 
        {
            path: "/login",
            element: <Login></Login>,  
        }, 
        {
            path: "/register",
            element: <Register></Register>,
        }, 
        {
            path: "/about",
            element: <About></About>,
        }
      ]
    },
  ]);

  export default router;