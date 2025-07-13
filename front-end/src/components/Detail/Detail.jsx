import { useContext } from "react";
import { Accordion } from "../Accordion/Accordion";
import { FullWidthButton } from "../FullWidthButton/FullWidthButton";
import css from "./Detail.module.css";
import { CartContext } from "../../contexts/CartContext";

export const Detail = ({ product }) => {
  console.log(product);

  const [shoppingCart, setShoppingCart] = useContext(CartContext);

  console.log(shoppingCart);

  const handleAddToCart = () => {
    console.log("click button");
    setShoppingCart((prevstate) => [...prevstate, product]);
  };

  return (
    <>
      <div className={css.detail}>
        <h3 className={css.detailBrand}>{product.brand}</h3>
        <p className={css.detailName}>{product.name}</p>
        <p className={css.detailPrice}>{product.price} zł</p>
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
