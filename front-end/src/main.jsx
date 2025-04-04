import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Favourites } from "./views/Favourites/Favourites";
import { Cart } from "./views/Cart/Cart";
import { Layout } from "./components/Layout/Layout";
import { MainPage } from "./views/MainPage/MainPage";
import { ProductsList } from "./views/ProductsList/ProductsList";
import { NotFound } from "./views/NotFound/NotFound";
import { loaderMainPage } from "./api/loaderMainPage";
import "./styles/globals.css";
import "./styles/theme.css";

const router = createBrowserRouter([
  {
    element: <Layout />,
    path: "",

    children: [
      {
        element: <MainPage />,
        path: "/:gender?",
        errorElement: <NotFound />,
        loader: loaderMainPage,
      },
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
  //   element: <ProductDetails />,
  //   path: "produkt",
  // },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
