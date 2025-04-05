import { NavLink, useParams } from "react-router-dom";
import { CATEGORIES } from "../../constans/categories";
import { ACTIVE_GENDERS_MAPPING } from "../../constans/mappings";
import { nanoid } from "nanoid";
import ICON_ARROW from "../../assets/icon_arrow.svg";
import css from "./ExpandableMenu.module.css";

export const ExpandableMenu = () => {
  const activeCategoryPathMockup = "odziez";

  const params = useParams();
  console.log(params);
  const activeGender = ACTIVE_GENDERS_MAPPING.get(params.gender);
  console.log(activeGender);

  return (
    <>
      <div className={css.expandableMenu}>
        <p className={css.genderTitle}>{activeGender}</p>
        <div>
          <ul>
            {CATEGORIES.map((category) => {
              return (
                <li key={nanoid()} className={css.categoriesItem}>
                  <NavLink to={category.path} className={css.categoriesLink}>
                    {category.name}
                    <img
                      src={ICON_ARROW}
                      className={
                        activeCategoryPathMockup === category.path
                          ? css.categoriesIconActive
                          : ""
                      }
                    />
                  </NavLink>
                  {activeCategoryPathMockup === category.path ? (
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
