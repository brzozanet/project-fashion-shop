import { Link } from "react-router-dom";
import css from "./Product.module.css";

export const Product = ({
  id,
  name,
  price,
  photo,
  gender,
  category,
  subcategory,
}) => {
  return (
    <>
      <Link to={`/${gender}/${category}/${subcategory}/${id}`}>
        <div className={css.productPhotoContainer}>
          <img
            src={photo}
            alt={name}
            title={name}
            className={css.productPhotoImg}
          />
          <div className={css.heartIcon}></div>
        </div>
        <h3 className={css.productTitle}>{name}</h3>
        <p className={css.productPrice}>{price} zł</p>
      </Link>
    </>
  );
};
