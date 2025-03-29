import { Accordion } from "../Accordion/Accordion";
import { FullWidthButton } from "../FullWidthButton/FullWidthButton";
import css from "./Detail.module.css";

export const Detail = ({
  brand,
  name,
  price,
  description,
  maintenanceInfo,
}) => {
  return (
    <>
      <div className={css.detail}>
        <h3 className={css.detailBrand}>{brand}</h3>
        <p className={css.detailName}>{name}</p>
        <p className={css.detailPrice}>{price} zł</p>
        <div className={css.detailBtnWrapper}>
          <FullWidthButton>Dodaj do koszyka</FullWidthButton>
        </div>
        <p className={css.detailShipping}>Dostawa do 24h</p>
        <p className={css.detailReturn}>Zwrot do 30 dni</p>
        <Accordion
          description={description}
          maintenanceInfo={maintenanceInfo}
        />
      </div>
    </>
  );
};
