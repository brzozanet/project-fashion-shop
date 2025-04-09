import { Link } from "react-router-dom";
import { GENDERS_PL_MAPPING } from "../../constans/mappings";
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
  const genderPL = GENDERS_PL_MAPPING.get(gender);

  return (
    <>
      <Link to={`/${genderPL}/${category}/${subcategory}/${id}`}>
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
