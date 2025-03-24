import { Link } from "react-router-dom";
import ICON_HEART from "../../assets/iconHeart.svg";
import ICON_BAG from "../../assets/iconBag.svg";
import css from "./IconMenu.module.css";

export const IconMenu = () => {
  const cartItems = 2;

  return (
    <>
      <ul className={css.iconMenuList}>
        <li className={css.iconMenuItem}>
          <Link to="/ulubione">
            <img src={ICON_HEART} alt="Ulubione" title="Ulubione"></img>
          </Link>
        </li>
        <li className={css.iconMenuItem}>
          <Link to="/koszyk">
            <img src={ICON_BAG} alt="Koszyk" title="Koszyk" />
            <div className={css.iconCounter}>{cartItems}</div>
          </Link>
        </li>
      </ul>
    </>
  );
};
