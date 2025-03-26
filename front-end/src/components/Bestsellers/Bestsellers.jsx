import { nanoid } from "nanoid";
import { CenteredContent } from "../CenteredContent/CenteredContent";
import { Product } from "../Product/Product";
import { PageTitle } from "../PageTitle/PageTitle";
import css from "./Bestsellers.module.css";

export const Bestsellers = () => {
  const bestsellersMockup = [
    {
      id: 26,
      gender: "women",
      category: "obuwie",
      subcategory: "eleganckie",
      productName: "Szpilki",
      brand: "Test producent",
      pricePLN: 49,
      priceEUR: 10,
      photos: [
        "http://localhost:3000/product-photos/women-shoes-1.jpg",
        "http://localhost:3000/product-photos/women-shoes-2.jpg",
        "http://localhost:3000/product-photos/women-shoes-3.jpg",
      ],
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.",
      maintenanceInfo:
        "Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu",
    },
    {
      id: 27,
      gender: "women",
      category: "obuwie",
      subcategory: "eleganckie",
      productName: "Szpilki 2",
      brand: "Inny proucent",
      pricePLN: 149,
      priceEUR: 39,
      photos: [
        "http://localhost:3000/product-photos/women-shoes-2.jpg",
        "http://localhost:3000/product-photos/women-shoes-3.jpg",
        "http://localhost:3000/product-photos/women-shoes-1.jpg",
      ],
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.",
      maintenanceInfo:
        "Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu",
    },
    {
      id: 28,
      gender: "women",
      category: "odziez",
      subcategory: "koszulki",
      productName: "Biały Sweter",
      brand: "Sun zi",
      pricePLN: 299,
      priceEUR: 59,
      photos: [
        "http://localhost:3000/product-photos/women-sweater-1.jpg",
        "http://localhost:3000/product-photos/women-trousers-2.jpg",
        "http://localhost:3000/product-photos/women-trousers-1.jpg",
      ],
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.",
      maintenanceInfo:
        "Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu",
    },
    {
      id: 29,
      gender: "women",
      category: "odziez",
      subcategory: "spodnie",
      productName: "Spodnie",
      brand: "Shin-tzu",
      pricePLN: 149,
      priceEUR: 39,
      photos: [
        "http://localhost:3000/product-photos/women-trousers-1.jpg",
        "http://localhost:3000/product-photos/women-trousers-2.jpg",
        "http://localhost:3000/product-photos/women-trousers-2.jpg",
      ],
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.",
      maintenanceInfo:
        "Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu",
    },
  ];

  return (
    <>
      <div className={css.bestsellers}>
        <CenteredContent>
          <PageTitle>Sprawdź nasze bestellery</PageTitle>
          <div className={css.bestsellersList}>
            {bestsellersMockup.map((product) => {
              return (
                <Product
                  name={product.productName}
                  price={product.pricePLN}
                  photo={product.photos[0]}
                  key={nanoid()}
                />
              );
            })}
          </div>
        </CenteredContent>
      </div>
    </>
  );
};
