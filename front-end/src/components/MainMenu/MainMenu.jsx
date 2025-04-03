import { GENDERS } from "../../constans/genders";
import { NavLink } from "react-router-dom";
import { nanoid } from "nanoid";
import css from "./MainMenu.module.css";

export const MainMenu = () => {
  return (
    <>
      <ul className={css.mainMenuList}>
        {GENDERS.map((category) => {
          return (
            <li key={nanoid()} className={css.mainMenuItem}>
              <NavLink to={category.path}>{category.name}</NavLink>
            </li>
          );
        })}
      </ul>
    </>
  );
};
