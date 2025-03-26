import { Link } from "react-router-dom";
import ICON_HEART from "../../assets/iconHeart.svg";
import css from "./Product.module.css";

export const Product = ({ name, price, photo }) => {
  return (
    <>
      <Link to="" className={css.product}>
        <div className={css.productPhotoContainer}>
          <img
            src={photo}
            alt={name}
            title={name}
            className={css.productPhoto}
          />
          <img src={ICON_HEART} className={css.heartIcon} />
        </div>
        <h3 className={css.productTitle}>{name}</h3>
        <p className={css.productPrice}>{price} zł</p>
      </Link>
    </>
  );
};
