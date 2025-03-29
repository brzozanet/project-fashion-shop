import { useState } from "react";
import { Link } from "react-router-dom";
import ICON_ARROW from "../../assets/icon_arrow.svg";
import css from "./Accordion.module.css";

export const Accordion = ({ description, maintenanceInfo }) => {
  const [descriptionVisilbe, setDescriptionVisilbe] = useState(true);
  const [maintenanceInfoVisilbe, setMaintenanceInfoVisilbe] = useState(true);

  const toggleState = (state) => {
    return (state = !state);
  };

  return (
    <>
      <div>
        <Link
          onClick={() => setDescriptionVisilbe(toggleState)}
          className={css.accordionContainer}
        >
          <p className={css.accordionTitle}>Opis produktu</p>
          <img
            src={ICON_ARROW}
            className={
              descriptionVisilbe ? css.accordionImg : css.accordionImgReverse
            }
          />
        </Link>
        {descriptionVisilbe && (
          <p className={css.accordionText}>{description}</p>
        )}
        <Link
          onClick={() => setMaintenanceInfoVisilbe(toggleState)}
          className={css.accordionContainer}
        >
          <p className={css.accordionTitle}>Wskazówki pielęgnacyjne</p>
          <img
            src={ICON_ARROW}
            className={
              descriptionVisilbe ? css.accordionImg : css.accordionImgReverse
            }
          />
        </Link>
        {maintenanceInfoVisilbe && (
          <p className={css.accordionText}>{maintenanceInfo}</p>
        )}
      </div>
    </>
  );
};
