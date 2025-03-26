import { Link } from "react-router-dom";
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
          <div className={css.heartIcon}></div>
        </div>
        <h3 className={css.productTitle}>{name}</h3>
        <p className={css.productPrice}>{price} zł</p>
      </Link>
    </>
  );
};
