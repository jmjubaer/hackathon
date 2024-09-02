import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import MainLayout from "./Layout/MainLayout.jsx";
import Home from "./Page/Home/HomePage.jsx";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
const routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        // errorElement: <NotFound></NotFound>,
        children: [
            {
                path: "/",
                element: <Home />,
            },
        ],
    },
]);

createRoot(document.getElementById("root")).render(
    <StrictMode>
      <RouterProvider router={routes}/>
    </StrictMode>
);
