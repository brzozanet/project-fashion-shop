import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Favourites } from "./views/Favourites/Favourites";
import { Cart } from "./views/Cart/Cart";
import { Layout } from "./components/Layout/Layout";
import "./styles/globals.css";
import "./styles/theme.css";

const router = createBrowserRouter([
  {
    element: <Layout />,
    path: "",
    children: [
      {
        element: <Favourites />,
        path: "/ulubione",
      },
      {
        element: <Cart />,
        path: "/koszyk",
      },
    ],
  },

  // {
  //   element: <ProductsList />,
  //   path: "produkty",
  // },
  // {
  //   element: <ProductDetails />,
  //   path: "produkt",
  // },
]);

createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router} />
  </>
);
