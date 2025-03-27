import { Link } from "react-router-dom";
import ICON_DELETE from "../../assets/icon_delete.svg";
import ICON_CART from "../../assets/icon_cart.svg";
import css from "./FavouriteProduct.module.css";

export const FavouriteProduct = ({
  image,
  brand,
  name,
  description,
  price,
}) => {
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
                {brand} {name}
              </h3>
              <p>{truncateTextSmart(description, 100)}</p>
            </div>
            <div>
              <Link to="" className={css.favouriteIcon}>
                <img src={ICON_DELETE} width="14" height="14" />
                <span className={css.favouriteIconText}>Usuń</span>
              </Link>
              <Link to="" className={css.favouriteIcon}>
                <img src={ICON_CART} width="14" height="14" />
                <span className={css.favouriteIconText}>Dodaj do koszyka</span>
              </Link>
            </div>
          </div>
        </div>
        <div className={css.favouriteBox}>
          <p className={css.favouritePrice}>{price} zł</p>
        </div>
      </div>
    </>
  );
};
