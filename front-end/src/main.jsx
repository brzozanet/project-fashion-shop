import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import { Favourites } from "./views/Favourites/Favourites";
import { Cart } from "./views/Cart/Cart";
import { Layout } from "./components/Layout/Layout";
import { MainPage } from "./views/MainPage/MainPage";
import { NotFound } from "./views/NotFound/NotFound";
import { GENDERS_MAPPING } from "./api/mappings";
import "./styles/globals.css";
import "./styles/theme.css";

const router = createBrowserRouter([
  {
    element: <Layout />,
    path: "",
    children: [
      {
        element: <MainPage />,
        path: "/:gender",
        loader: ({ params }) => {
          if (GENDERS_MAPPING.get(params.gender)) {
            return fetch(
              `http://localhost:3000/${GENDERS_MAPPING.get(params.gender)}`
            );
          }

          return redirect("/404");
        },
      },
      {
        element: <Favourites />,
        path: "/ulubione",
      },
      {
        element: <Cart />,
        path: "/koszyk",
      },
      {
        element: <NotFound />,
        path: "/404",
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
