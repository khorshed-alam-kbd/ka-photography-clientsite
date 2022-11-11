import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AddServices from "../../Pages/AddServices/AddServices";
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home/Home";
import EditReview from "../../Pages/MyReviewSection/EditReview";
import MyAllReviews from "../../Pages/MyReviewSection/MyAllReviews";
import Services from "../../Pages/Services/Services";
import ServicesDetails from "../../Pages/ServicesDetails/ServicesDetails";
import Login from "../../Pages/Shared/Login/Login";
import Page404 from "../../Pages/Shared/Page404/Page404";
import Register from "../../Pages/Shared/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },

            {
                path: '/services',
                element: <Services></Services>
            },
            {
                path: '/services/:id',
                element: <ServicesDetails></ServicesDetails>,
                loader: ({ params }) => fetch(`https://ka-photography-server.vercel.app/services/${params.id}`)
            },
            {
                path: '/reviews',
                element: <PrivateRoute><MyAllReviews></MyAllReviews></PrivateRoute>,
            },
            {
                path: '/editReview/:id',
                element: <PrivateRoute><EditReview></EditReview></PrivateRoute>,
            },
            {
                path: '/addServices',
                element: <PrivateRoute><AddServices></AddServices></PrivateRoute>,

            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },

        ]
    },
    {
        path: '*',
        element: <Page404></Page404>,
    }
]);

export default router;