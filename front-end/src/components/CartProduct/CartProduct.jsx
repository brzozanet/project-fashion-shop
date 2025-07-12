import { Link } from "react-router-dom";
import { useContext } from "react";
import { CurrencyContext } from "../../contexts/currencyContext";
import ICON_DELETE from "../../assets/icon_delete.svg";
import css from "./CartProduct.module.css";

export const CartProduct = ({ brand, name, image, description, price }) => {
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
      <div className={css.cartProduct}>
        <div className={css.cartProductBox}>
          <div className={css.cartProductPhoto}>
            <img
              src={image}
              alt={name}
              title={name}
              className={css.cartProductPhotoImg}
            />
          </div>
        </div>
        <div className={css.cartProductBox}>
          <div className={css.cartProductSubBox}>
            <div className={css.cartProductSubBoxText}>
              <h3 className={css.cartProductTitle}>
                {brand} | {name}
              </h3>
              <p>{truncateTextSmart(description, 100)}</p>
            </div>
            <Link to="">
              <img src={ICON_DELETE} width="14" height="14" />
              <span className={css.cartProductIconText}>Usuń z koszyka</span>
            </Link>
          </div>
        </div>
        <div className={css.cartProductBox}>
          <p className={css.cartProductPrice}>
            {price} {currency}
          </p>
        </div>
      </div>
    </>
  );
};
