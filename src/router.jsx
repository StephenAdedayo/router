import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";

export const router = createBrowserRouter([
    {path:"/", element:<App />},
    {path:"/about", element:<About />},
    {path:"/projects", element:<Projects />},
    {path: "/testimonials", element:<Testimonials />},
    {path: "/contact", element:<Contact/>},
    {path: "/login", element:<Login />},
    {path:"/register", element:<Register />}
])