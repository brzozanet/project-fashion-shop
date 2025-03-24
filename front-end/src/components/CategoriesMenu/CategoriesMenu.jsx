import { CATEGORIES } from "../../constans/categories";
import { NavLink } from "react-router-dom";
import { nanoid } from "nanoid";
import css from "./CategoriesMenu.module.css";

export const CategoriesMenu = () => {
  return (
    <>
      <div className={css.categoriesMenu}>
        <ul className={css.categoryList}>
          {CATEGORIES.map((category) => {
            return (
              <li className={css.categoryItem} key={nanoid()}>
                <NavLink to={category.path} className={css.categoryLink}>
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
