import { GENDERS } from "../../constans/genders";
import { NavLink } from "react-router-dom";
import { nanoid } from "nanoid";
import css from "./MainMenu.module.css";

export const MainMenu = () => {
  return (
    <>
      <div>
        <ul className={css.mainMenuList}>
          {GENDERS.map((category) => {
            return (
              <li>
                <NavLink
                  key={nanoid()}
                  to={category.path}
                  className={css.mainMenuItem}
                >
                  {category.name}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
