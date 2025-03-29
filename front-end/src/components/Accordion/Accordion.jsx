import ICON_ARROW from "../../assets/icon_arrow.svg";
import css from "./Accordion.module.css";

export const Accordion = ({ description, maintenanceInfo }) => {
  return (
    <>
      <div>
        <div className={css.accordionContainer}>
          <p className={css.accordionTitle}>Opis produktu</p>
          <img src={ICON_ARROW} className={css.accordionImg} />
        </div>
        <p className={css.accordionText}>{description}</p>
        <div className={css.accordionContainer}>
          <p className={css.accordionTitle}>Wskazówki pielęgnacyjne</p>
          <img src={ICON_ARROW} className={css.accordionImg} />
        </div>
        <p className={css.accordionText}>{maintenanceInfo}</p>
      </div>
    </>
  );
};
