import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import AddProduct from "../pages/AddProduct";
import MyCart from "../pages/MyCart";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import PrivateRoute from "./PrivateRoute";
import Brand from "../pages/Brand";
import ProductDetails from "../pages/ProductDetails";
import UpdateProduct from "../pages/UpdateProduct";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://brand-shop-server-mhpo2vsht-bayazid-hassans-projects.vercel.app/brand')
            },
            {
                path: '/addProduct',
                element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>,
            },
            {
                path: '/myCart',
                element: <PrivateRoute><MyCart></MyCart></PrivateRoute>,
                loader: () => fetch('https://brand-shop-server-mhpo2vsht-bayazid-hassans-projects.vercel.app/myCart')

            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/signUp',
                element: <SignUp></SignUp>,
            },
            {
                path: '/brand/:name',
                element: <Brand></Brand>,
                loader: ({ params }) => fetch(`https://brand-shop-server-mhpo2vsht-bayazid-hassans-projects.vercel.app/product/brand/${params.name}`)
            },
            {
                path: '/productDetails/:id',
                element: <PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`https://brand-shop-server-mhpo2vsht-bayazid-hassans-projects.vercel.app/product/id/${params.id}`)
            },
            {
                path: '/updateProduct/:id',
                element: <PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
                loader: ({ params }) => fetch(`https://brand-shop-server-mhpo2vsht-bayazid-hassans-projects.vercel.app/product/forUpdate/${params.id}`)
            }



        ]
    }
]);

export default router;