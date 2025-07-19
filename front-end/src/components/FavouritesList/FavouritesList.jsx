import { useContext } from "react";
import { FavouriteProduct } from "../FavouriteProduct/FavouriteProduct";
import { CurrencyContext } from "../../contexts/CurrencyContext";
import css from "./FavouritesList.module.css";

export const FavouritesList = ({
  data: [userFavouritesProducts, userFavouritesIds],
}) => {
  const [currency] = useContext(CurrencyContext);

  return (
    <>
      <div className={css.favouritesList}>
        {userFavouritesProducts.map((product) => {
          // Znajdź odpowiedni rekord z favourites dla tego produktu
          const favouriteRecord = userFavouritesIds.find(
            (favourite) => favourite.productId === product.id
          );
          return (
            <FavouriteProduct
              id={product.id}
              image={product.photos[0]}
              brand={product.brand}
              name={product.name}
              // Optional chaining
              favouriteId={favouriteRecord?.id}
              description={product.description}
              // Dynamic access
              price={product[`price${currency}`]}
              key={product.id}
              // key={nanoid()}
            />
          );
        })}
      </div>
    </>
  );
};
