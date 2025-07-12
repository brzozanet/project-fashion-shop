import { useFetcher } from "react-router-dom";
import { useContext } from "react";
import { CurrencyContext } from "../../contexts/currencyContext";
import ICON_DELETE from "../../assets/icon_delete.svg";
import ICON_CART from "../../assets/icon_cart.svg";
import css from "./FavouriteProduct.module.css";

export const FavouriteProduct = ({
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

  const truncateTextSmart = (text, maxLength) => {
    if (text.length <= maxLength) return text;

    const truncated = text.slice(0, maxLength);
    const lastSpace = truncated.lastIndexOf(" ");

    return lastSpace === -1
      ? truncated + "..."
      : truncated.slice(0, lastSpace) + "...";
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
              <button className={css.favouriteButtonAction}>
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
