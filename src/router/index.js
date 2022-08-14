import About from "../pages/About";
import Login from "../pages/Login";
import Post from "../pages/Post";
import PostIdPage from "../pages/PostIdPage";

export const privateRoutes=[
    {path:"/post" , element:<Post/>},
    {path:"/about", element:<About/>},
    {path:"/login", element:<Login/>},
    {path:"/post/:id",element:<PostIdPage/>},
]
