import { useFetcher } from "react-router-dom";
import { useContext } from "react";
import { CurrencyContext } from "../../contexts/CurrencyContext";
import ICON_DELETE from "../../assets/icon_delete.svg";
import ICON_CART from "../../assets/icon_cart.svg";
import css from "./FavouriteProduct.module.css";
import { CartContext } from "../../contexts/CartContext";

export const FavouriteProduct = ({
  id,
  favouriteId,
  image,
  brand,
  name,
  description,
  price,
}) => {
  const fetcher = useFetcher();
  const { Form } = fetcher;
  const [currency] = useContext(CurrencyContext);
  const [shoppingCart, setShoppingCart] = useContext(CartContext);

  const truncateTextSmart = (text, maxLength) => {
    if (text.length <= maxLength) return text;

    const truncated = text.slice(0, maxLength);
    const lastSpace = truncated.lastIndexOf(" ");

    return lastSpace === -1
      ? truncated + "..."
      : truncated.slice(0, lastSpace) + "...";
  };

  const productAlreadyAdded = shoppingCart.find((product) => product.id === id);
  console.log(productAlreadyAdded);

  const handleAddToCartButton = (id) => {
    setShoppingCart((prevState) => [...prevState, product(id)]);
  };

  return (
    <>
      <div className={css.favouriteProduct}>
        <div className={css.favouriteBox}>
          <div className={css.favouritePhotoContainer}>
            <img
              src={image}
              alt={name}
              title={name}
              className={css.favouritePhotoImg}
            />
          </div>
        </div>
        <div className={css.favouriteBox}>
          <div className={css.favouriteSubBox}>
            <div className={css.favouriteSubBoxText}>
              <h3 className={css.favouriteTitle}>
                {brand} | {name}
              </h3>
              <p>{truncateTextSmart(description, 100)}</p>
            </div>
            {id}
            <div className={css.favouritesButtons}>
              <Form
                method="DELETE"
                action={`/usun-z-ulubionych/${favouriteId}`}
              >
                <button className={css.favouriteButtonAction}>
                  <img src={ICON_DELETE} width="14" height="14" />
                  <span className={css.favouriteIconText}>
                    Usuń z ulubionych
                  </span>
                </button>
              </Form>
              <button
                className={css.favouriteButtonAction}
                onClick={() => handleAddToCartButton(id)}
              >
                <img src={ICON_CART} width="14" height="14" />
                <span className={css.favouriteIconText}>Dodaj do koszyka</span>
              </button>
            </div>
          </div>
        </div>
        <div className={css.favouriteBox}>
          <p className={css.favouritePrice}>
            {price} {currency}
          </p>
        </div>
      </div>
    </>
  );
};
