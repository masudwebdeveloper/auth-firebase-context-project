import Home from "../components/Home";
import Login from "../components/Login";
import Main from "../components/Main";
import Register from "../components/Register";
import { createBrowserRouter}  from "react-router-dom";
import PrivateRoute from "../routes/PrivateRoute";
import Orders from "../components/Orders";

const router = createBrowserRouter([
   {
      path: '/',
      element: <Main></Main>,
      children: [
         {
            path: '/',
            element: <Home></Home>
         },
         {
            path: '/orders',
            element: <PrivateRoute><Orders></Orders></PrivateRoute>
         },
         {
            path: '/home',
            element: <PrivateRoute><Home></Home></PrivateRoute>
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
   }
])

export default router;