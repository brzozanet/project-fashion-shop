import { useState } from "react";
import { Link } from "react-router-dom";
import ICON_ARROW from "../../assets/icon_arrow.svg";
import css from "./Accordion.module.css";

export const Accordion = ({ description, maintenanceInfo }) => {
  const [descriptionVisilbe, setDescriptionVisilbe] = useState(false);
  const [maintenanceInfoVisilbe, setMaintenanceInfoVisilbe] = useState(false);

  const toggleState = (state) => {
    return (state = !state);
  };

  return (
    <>
      <div>
        <div className={css.accordionContainer}>
          <Link onClick={() => setDescriptionVisilbe(toggleState)}>
            <p className={css.accordionTitle}>Opis produktu</p>
            <img
              src={ICON_ARROW}
              className={
                descriptionVisilbe ? css.accordionImg : css.accordionImgReverse
              }
            />
          </Link>
        </div>
        {descriptionVisilbe && (
          <p className={css.accordionText}>{description}</p>
        )}
        <div className={css.accordionContainer}>
          <Link onClick={() => setMaintenanceInfoVisilbe(toggleState)}>
            <p className={css.accordionTitle}>Wskazówki pielęgnacyjne</p>
            <img
              src={ICON_ARROW}
              className={
                descriptionVisilbe ? css.accordionImg : css.accordionImgReverse
              }
            />
          </Link>
        </div>
        {maintenanceInfoVisilbe && (
          <p className={css.accordionText}>{maintenanceInfo}</p>
        )}
      </div>
    </>
  );
};
