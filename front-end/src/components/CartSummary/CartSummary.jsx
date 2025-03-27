import { FullWidthButton } from "../FullWidthButton/FullWidthButton";
import ICON_SHIPPING from "../../assets/icon_shipping.svg";
import css from "./CartSummary.module.css";

export const CartSummary = () => {
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
      pricePLN: 99,
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

  const productValue = cartProductsMockup.reduce(
    (sum, product) => sum + product.pricePLN,
    0
  );

  let shippingCost;
  if (productValue > 500) {
    shippingCost = 0;
  } else {
    shippingCost = 29;
  }

  const toBePaid = productValue + shippingCost;

  return (
    <>
      <div>
        <div className={css.cartSummary}>
          <h2 className={css.cartSummaryTitle}>Podsumowanie</h2>
          <div className={css.cartSummaryRow}>
            <p>Wartość produktów:</p>
            <p>{productValue} zł</p>
          </div>
          <div className={css.cartSummaryRow}>
            <p>Koszt dostawy:</p>
            <p>{shippingCost} zł</p>
          </div>
          <div className={css.cartSummaryRow}>
            <p>
              <strong>Do zapłaty:</strong>
            </p>
            <p>
              <strong>{toBePaid} zł</strong>
            </p>
          </div>
          <FullWidthButton>Idź do kasy</FullWidthButton>
        </div>
        <div className={css.freeShipping}>
          <img
            src={ICON_SHIPPING}
            width="20"
            height="20"
            className={css.freeShippingIcon}
          />
          <p>
            <strong>Darmowa dostawa od 500 zł</strong>
          </p>
        </div>
      </div>
    </>
  );
};
