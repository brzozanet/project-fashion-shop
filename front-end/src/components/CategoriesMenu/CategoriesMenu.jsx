import { CATEGORIES } from "../../constans/categories";
import { Link } from "react-router-dom";
import { nanoid } from "nanoid";
import css from "./CategoriesMenu.module.css";

export const CategoriesMenu = () => {
  return (
    <>
      <div className={css.categoriesMenu}>
        <ul>
          {CATEGORIES.map((category) => {
            return (
              <li className={css.categoryItem} key={nanoid()}>
                <Link to={category.path} className={css.categoryLink}>
                  {category.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
