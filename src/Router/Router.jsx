import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import Services from "../Pages/Services";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import About from "../Pages/About";
import ServicesDetailes from "../Pages/ServicesDetailes/ServicesDetailes";
import OurTeam from "../Pages/OurTeam";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Blog from "../Pages/Blog";
import PrivateRouter2 from "../PrivateRoute/PrivateRouter2";
import TechNews from "../Pages/TechNews";

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
            element: <PrivateRoute>
                <ServicesDetailes></ServicesDetailes>
            </PrivateRoute>,
            loader: () => fetch('../data.json')
        }, 
        {
            path: "/ourTeam",
            element: <OurTeam></OurTeam>
        }, 
        {
            path: "/blog",
            element: <PrivateRouter2>
                    <Blog></Blog>
            </PrivateRouter2>      
        }, 
        {
            path: "/techNews",
            element: <PrivateRouter2>
                <TechNews></TechNews>
            </PrivateRouter2>
        }
      ]
    },
  ]);

  export default router;