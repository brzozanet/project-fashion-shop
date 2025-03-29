import { NavLink } from "react-router-dom";
import { CATEGORIES } from "../../constans/categories";
import { nanoid } from "nanoid";
import ICON_ARROW from "../../assets/icon_arrow.svg";
import css from "./ExpandableMenu.module.css";

export const ExpandableMenu = () => {
  const activeGenderName = "Kobieta";
  const activeCategoryPath = "odziez";

  return (
    <>
      <div className={css.expandableMenu}>
        <p className={css.genderTitle}>{activeGenderName}</p>
        <div>
          <ul>
            {CATEGORIES.map((category) => {
              return (
                <li key={nanoid()} className={css.categoriesItem}>
                  <NavLink to={category.path} className={css.categoriesLink}>
                    {category.name}{" "}
                    <img
                      src={ICON_ARROW}
                      className={
                        activeCategoryPath === category.path
                          ? css.categoriesIconActive
                          : ""
                      }
                    />
                  </NavLink>
                  {activeCategoryPath === category.path ? (
                    <ul>
                      {category.subcategories.map((subcategory) => {
                        return (
                          <li key={nanoid()} className={css.subCategoriesItem}>
                            <NavLink
                              to={`${category.path}/${subcategory.path}`}
                              className={css.subCategoriesLink}
                            >
                              {subcategory.name}
                            </NavLink>
                          </li>
                        );
                      })}
                    </ul>
                  ) : (
                    ""
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};
