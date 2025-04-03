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
          const GENDERS_MAPPING = new Map([
            ["kobieta", "women"],
            ["mezczyzna", "men"],
            ["dziecko", "children"],
          ]);

          console.log(params.gender);
          console.log(GENDERS_MAPPING.get(params.gender));

          if (GENDERS_MAPPING.get(params.gender)) {
            return fetch(
              `http://localhost:3000/${GENDERS_MAPPING.get(params.gender)}`
            );
          }

          return redirect("/koszyk");
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
