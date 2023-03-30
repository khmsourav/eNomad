import "./assets/scss/style.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Planing from "./pages/Planing";
import Stories from "./pages/Stories";
import Explore from "./pages/Explore";
import Travels from "./pages/Travels";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "planing",
    element: <Planing />,
  },
  {
    path: "stories",
    element: <Stories />,
  },
  {
    path: "explore",
    element: <Explore />,
  },
  {
    path: "travels",
    element: <Travels />,
  },
  {
    path: "blogs",
    element: <Blogs />,
  },
  {
    path: "contact",
    element: <Contact />,
  },
]);

export default function App() {
  return (
    <RouterProvider router={router} />
  )
}
