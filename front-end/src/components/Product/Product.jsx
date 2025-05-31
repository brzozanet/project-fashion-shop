import { Link, useParams, useFetcher } from "react-router-dom";
import css from "./Product.module.css";

export const Product = ({ id, name, price, photo, category, subcategory }) => {
  const params = useParams();
  const fetcher = useFetcher();

  return (
    <div className={css.product}>
      <div className={css.productPhotoContainer}>
        <Link to={`/${params.gender}/${category}/${subcategory}/${id}`}>
          <img
            src={photo}
            alt={name}
            title={name}
            className={css.productPhotoImg}
          />
        </Link>
        <fetcher.Form
          method="post"
          action={`/dodaj-do-ulubionych/${id}`}
          onClick={(event) => event.stopPropagation()}
        >
          <button
            type="submit"
            className={css.heartIcon}
            disabled={fetcher.state === "submitting"}
          ></button>
        </fetcher.Form>
      </div>
      <Link to={`/${params.gender}/${category}/${subcategory}/${id}`}>
        <h3 className={css.productTitle}>{name}</h3>
        <p className={css.productPrice}>{price} zł</p>
      </Link>
    </div>
  );
};
