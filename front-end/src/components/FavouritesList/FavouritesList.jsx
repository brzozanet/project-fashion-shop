import { useContext } from "react";
import { FavouriteProduct } from "../FavouriteProduct/FavouriteProduct";
import css from "./FavouritesList.module.css";
import { CurrencyContext } from "../../contexts/currencyContext";

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
              image={product.photos[0]}
              brand={product.brand}
              name={product.name}
              // NOTE: optional chaining
              favouriteId={favouriteRecord?.id}
              description={product.description}
              // NOTE: dynamic access
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
