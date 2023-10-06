import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import Services from "../Pages/Services";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import About from "../Pages/About";
import ServicesDetailes from "../Pages/ServicesDetailes/ServicesDetailes";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <ErrorPage></ErrorPage>, 
      children: [
        {
            path: "/",
            element: <Home></Home>,
            loader: () => fetch('data.json')
        }, 
        {
            path: "/services",
            element: <Services></Services>,
            loader: () => fetch('data.json')
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
        }, 
        {
            path: "/serviceDetailes/:id",
            element: <ServicesDetailes></ServicesDetailes>,
            loader: () => fetch('../data.json')
        }
      ]
    },
  ]);

  export default router;