import "./styles/globals.css";
import "./styles/theme.css";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { App } from "./App.jsx";

const router = createBrowserRouter([
  {
    element: <App />,
    path: "/",
  },
]);

createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router} />
  </>
);
