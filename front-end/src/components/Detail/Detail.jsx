import { useContext } from "react";
import { Accordion } from "../Accordion/Accordion";
import { FullWidthButton } from "../FullWidthButton/FullWidthButton";
import { CartContext } from "../../contexts/CartContext";
import { CurrencyContext } from "../../contexts/CurrencyContext";
import css from "./Detail.module.css";

export const Detail = ({ product }) => {
  const [currency] = useContext(CurrencyContext);
  const [, setShoppingCart] = useContext(CartContext);

  const handleAddToCart = () => {
    setShoppingCart((prevstate) => [...prevstate, product]);
  };

  return (
    <>
      <div className={css.detail}>
        <h3 className={css.detailBrand}>{product.brand}</h3>
        <p className={css.detailName}>{product.name}</p>
        <p className={css.detailPrice}>
          {product[`price${currency}`]} {currency}
        </p>
        <div className={css.detailBtnWrapper}>
          <FullWidthButton onClick={handleAddToCart}>
            Dodaj do koszyka
          </FullWidthButton>
        </div>
        <p className={css.detailShipping}>Dostawa do 24h</p>
        <p className={css.detailReturn}>Zwrot do 30 dni</p>
        <Accordion
          description={product.description}
          maintenanceInfo={product.maintenanceInfo}
        />
      </div>
    </>
  );
};
