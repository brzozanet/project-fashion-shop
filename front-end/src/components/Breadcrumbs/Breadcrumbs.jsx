import { NavLink, useParams } from "react-router-dom";
import { nanoid } from "nanoid";
import { GENDERS_TEXT_MAPPING } from "../../constans/mappings";
import { CATEGORIES } from "../../constans/categories";
import ICON_ARROW from "../../assets/icon_arrow.svg";
import css from "./Breadcrumbs.module.css";

export const Breadcrumbs = ({ name }) => {
  const params = useParams();
  console.log(params);

  const activeGenderName = GENDERS_TEXT_MAPPING.get(params.gender);

  const foundCategory = CATEGORIES.find(
    (category) => params.category === category.path
  );

  const breadcrumbs = [
    { name: `${activeGenderName}`, path: `/${params.gender}` },
    {
      name: `${foundCategory.name}`,
      path: `/${params.gender}/${params.category}`,
    },
  ];

  if (params.subcategory) {
    const foundSubcategory = foundCategory.subcategories.find(
      (subcategory) => params.subcategory === subcategory.path
    );

    breadcrumbs.push({
      name: `${foundSubcategory.name}`,
      path: `/${params.gender}/${params.category}/${params.subcategory}`,
    });
  }

  if (params.id) {
    breadcrumbs.push({
      name: name,
      path: "",
    });
  }

  return (
    <>
      <ul className={css.breadcrumbsList}>
        {breadcrumbs.map((breadcrumb) => {
          return (
            <li key={nanoid()} className={css.breadcrumbsItem}>
              <NavLink end to={breadcrumb.path} className={css.breadcrumbsLink}>
                {breadcrumb.name}
                <img src={ICON_ARROW} className={css.breadcrumbsImage} />
              </NavLink>
            </li>
          );
        })}
      </ul>
    </>
  );
};
