import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainPage } from "./views/MainPage/MainPage";
import { Favourites } from "./views/Favourites/Favourites";
import "./styles/globals.css";
import "./styles/theme.css";

const router = createBrowserRouter([
  {
    element: <MainPage />,
    path: "/",
  },
  {
    element: <Favourites />,
    path: "/favourites",
  },
]);

createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router} />
  </>
);
