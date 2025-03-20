import { GENDERS } from "../../constans/genders";
import { NavLink } from "react-router-dom";
import { nanoid } from "nanoid";
import css from "./MainMenu.module.css";

export const MainMenu = () => {
  return (
    <>
      <div className={css.mainMenu}>
        <ul className={css.mainMenuList}>
          {GENDERS.map((category) => {
            return (
              <NavLink key={nanoid()} className={css.mainMenuItem}>
                {category.name}
              </NavLink>
            );
          })}
        </ul>
      </div>
    </>
  );
};
