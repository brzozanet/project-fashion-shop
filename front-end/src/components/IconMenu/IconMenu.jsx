import { Link } from "react-router-dom";
import HEART_ICON from "../../assets/iconHeart.svg";
import BAG_ICON from "../../assets/iconBag.svg";
import css from "./IconMenu.module.css";

export const IconMenu = () => {
  const cartItems = 2;

  return (
    <>
      <ul className={css.iconMenuList}>
        <li className={css.iconMenuItem}>
          <Link to="/ulubione">
            <img src={HEART_ICON} alt="Ulubione" title="Ulubione"></img>
          </Link>
        </li>
        <li className={css.iconMenuItem}>
          <Link to="/koszyk">
            <img src={BAG_ICON} alt="Koszyk" title="Koszyk" />
            <div className={css.iconCounter}>{cartItems}</div>
          </Link>
        </li>
      </ul>
    </>
  );
};
