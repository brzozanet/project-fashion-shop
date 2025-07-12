import { CenteredContent } from "../CenteredContent/CenteredContent";
import { Product } from "../Product/Product";
import { PageTitle } from "../PageTitle/PageTitle";
import { useContext } from "react";
import { CurrencyContext } from "../../contexts/currencyContext";
import css from "./Bestsellers.module.css";

export const Bestsellers = ({ bestsellersData, favouritesData }) => {
  const [currency] = useContext(CurrencyContext);

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
                  name={product.name}
                  price={`${product[`price${currency}`]}`}
                  photo={product.photos[0]}
                  gender={product.gender}
                  category={product.category}
                  subcategory={product.subcategory}
                  // NOTE: optional chaining
                  isProductInFavourites={favouriteRecord?.productId}
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
