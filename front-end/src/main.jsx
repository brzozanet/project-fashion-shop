import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Favourites } from "./views/Favourites/Favourites";
import { Cart } from "./views/Cart/Cart";
import { Layout } from "./components/Layout/Layout";
import { MainPage } from "./views/MainPage/MainPage";
import { ProductsList } from "./views/ProductsList/ProductsList";
import { loaderMainPage } from "./api/loaderMainPage";
import { loaderProductList } from "./api/loaderProductsList";
import "./styles/globals.css";
import "./styles/theme.css";

const router = createBrowserRouter([
  {
    element: <Layout />,
    path: "",
    // errorElement: <NotFound />,
    children: [
      {
        element: <MainPage />,
        path: "/:gender?",
        loader: loaderMainPage,
      },
      {
        element: <ProductsList />,
        path: ":gender/:category",
        loader: loaderProductList,
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
