import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import Services from "../Pages/Services";

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
            element: <ErrorPage></ErrorPage>,  
        } 
      ]
    },
  ]);

  export default router;