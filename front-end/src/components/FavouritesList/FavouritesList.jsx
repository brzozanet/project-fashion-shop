import { FavouriteProduct } from "../FavouriteProduct/FavouriteProduct";
import css from "./FavouritesList.module.css";

export const FavouritesList = ({
  data: [userFavouritesProducts, userFavouritesIds],
}) => {
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
              // NOTE: optional chaining
              favouriteId={favouriteRecord?.id}
              image={product.photos[0]}
              brand={product.brand}
              name={product.name}
              description={product.description}
              price={product.pricePLN}
              key={product.id}
              // key={nanoid()}
            />
          );
        })}
      </div>
    </>
  );
};
