import { CartProduct } from "../CartProduct/CartProduct";
import { useContext } from "react";
import { CurrencyContext } from "../../contexts/currencyContext";
import { CartContext } from "../../contexts/CartContext";
import css from "./CartProductsList.module.css";

export const CartProductsList = () => {
  const [currency] = useContext(CurrencyContext);
  const [shoppingCart] = useContext(CartContext);

  return (
    <>
      <div className={css.cartProductsList}>
        {shoppingCart.map((product) => {
          return (
            <CartProduct
              brand={product.brand}
              name={product.name}
              image={product.photos[0]}
              description={product.description}
              // NOTE: dynamic access
              price={product[`price${currency}`]}
              key={product.id}
            />
          );
        })}
      </div>
    </>
  );
};
