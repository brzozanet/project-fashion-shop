import { Link } from "react-router-dom";
import HEART_ICON from "../../assets/iconHeart.svg";
import BAG_ICON from "../../assets/iconBag.svg";
import css from "./IconMenu.module.css";

export const IconMenu = () => {
  return (
    <>
      <ul className={css.iconMenuList}>
        <li>
          <Link to="/ulubione">
            <img src={HEART_ICON} alt="Ulubione" title="Ulubione"></img>
          </Link>
        </li>
        <li>
          <Link to="/koszyk">
            <img src={BAG_ICON} alt="Koszyk" title="Koszyk"></img>
          </Link>
        </li>
      </ul>
    </>
  );
};
