import { Link } from "react-router-dom";
import { CATEGORIES } from "../../constans/categories";
import { nanoid } from "nanoid";
import ICON_ARROW from "../../assets/icon_arrow.svg";
import css from "./ExpandableMenu.module.css";

export const ExpandableMenu = () => {
  const activeGender = "Kobieta";

  return (
    <>
      <div className={css.expandableMenu}>
        <p className={css.genderTitle}>{activeGender}</p>
        <div>
          <ul>
            {CATEGORIES.map((category) => {
              return (
                <li key={nanoid()} className={css.categoriesItem}>
                  <Link to={category.path} className={css.categoriesLink}>
                    {category.name} <img src={ICON_ARROW} />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};
