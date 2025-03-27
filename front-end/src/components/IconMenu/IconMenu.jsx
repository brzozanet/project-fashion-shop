import { Link } from "react-router-dom";
import ICON_HEART from "../../assets/icon_heart.svg";
import ICON_BAG from "../../assets/icon_cart.svg";
import css from "./IconMenu.module.css";

export const IconMenu = () => {
  const cartProductsMockup = [
    {
      id: 26,
      gender: "women",
      category: "obuwie",
      subcategory: "eleganckie",
      name: "Szpilki",
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
      name: "Szpilki 2",
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
      name: "Biały Sweter",
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
      name: "Spodnie",
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
      <ul className={css.iconMenuList}>
        <li className={css.iconMenuItem}>
          <Link to="/ulubione">
            <img src={ICON_HEART} alt="Ulubione" title="Ulubione"></img>
          </Link>
        </li>
        <li className={css.iconMenuItem}>
          <Link to="/koszyk">
            <img src={ICON_BAG} alt="Koszyk" title="Koszyk" />
            <div className={css.iconCounter}>{cartProductsMockup.length}</div>
          </Link>
        </li>
      </ul>
    </>
  );
};
