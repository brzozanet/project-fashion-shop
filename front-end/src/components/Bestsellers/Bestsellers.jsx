import { CenteredContent } from "../CenteredContent/CenteredContent";
import { Product } from "../Product/Product";
import { PageTitle } from "../PageTitle/PageTitle";
import css from "./Bestsellers.module.css";

export const Bestsellers = ({ bestsellersData, favouritesData }) => {
  return (
    <>
      <div className={css.bestsellers}>
        <CenteredContent>
          <PageTitle>Sprawdź nasze bestellery</PageTitle>
          <div className={css.bestsellersList}>
            {bestsellersData.map((product) => {
              // Znajdź odpowiedni rekord z favourites dla tego produktu
              const favouriteRecord = favouritesData.find(
                (favourite) => favourite.productId === product.id
              );
              return (
                <Product
                  id={product.id}
                  // NOTE: optional chaining
                  isProductInFavourites={favouriteRecord?.productId}
                  name={product.name}
                  price={product.pricePLN}
                  photo={product.photos[0]}
                  gender={product.gender}
                  category={product.category}
                  subcategory={product.subcategory}
                  key={product.id}
                />
              );
            })}
          </div>
        </CenteredContent>
      </div>
    </>
  );
};
