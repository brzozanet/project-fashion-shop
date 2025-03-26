import "./styles/globals.css";
import "./styles/theme.css";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainPage } from "./views/MainPage.jsx";

const router = createBrowserRouter([
  {
    element: <MainPage />,
    path: "/",
  },
]);

createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router} />
  </>
);
