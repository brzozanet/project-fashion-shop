import { nanoid } from "nanoid";
import { FavouriteProduct } from "../FavouriteProduct/FavouriteProduct";
import css from "./FavouritesList.module.css";

export const FavouritesList = ({ data }) => {
  console.log(data);

  return (
    <>
      <div className={css.favouritesList}>
        {data.map((product) => {
          return (
            <FavouriteProduct
              id={product.id}
              image={product.photos[0]}
              brand={product.brand}
              name={product.name}
              description={product.description}
              price={product.pricePLN}
              key={nanoid()}
            />
          );
        })}
      </div>
    </>
  );
};
