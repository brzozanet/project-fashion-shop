import { NavLink, useParams } from "react-router-dom";
import { nanoid } from "nanoid";
import { GENDERS_TEXT_MAPPING } from "../../constans/mappings";
import ICON_ARROW from "../../assets/icon_arrow.svg";
import css from "./Breadcrumbs.module.css";
import { CATEGORIES } from "../../constans/categories";

export const Breadcrumbs = () => {
  const params = useParams();

  const genderText = GENDERS_TEXT_MAPPING.get(params.gender);

  const foundCategory = CATEGORIES.find(
    (category) => category.path === params.category
  );

  const breadcrumbs = [
    { name: `${genderText}`, path: `/${params.gender}` },
    {
      name: `${foundCategory.name}`,
      path: `/${params.gender}/${params.category}`,
    },
  ];

  if (params.subcategory) {
    breadcrumbs.push({
      name: `${params.subcategory}`,
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
