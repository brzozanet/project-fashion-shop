import { NavLink, useParams } from "react-router-dom";
import { nanoid } from "nanoid";
import ICON_ARROW from "../../assets/icon_arrow.svg";
import { GENDERS_TEXT_MAPPING } from "../../constans/mappings";

import css from "./Breadcrumbs.module.css";

export const Breadcrumbs = () => {
  const params = useParams();

  const activeGenderName = GENDERS_TEXT_MAPPING.get(params.gender);

  const breadcrumbs = [
    { name: `${activeGenderName}`, path: `/${params.gender}` },
    { name: "Odzież", path: "odziez" },
  ];

  return (
    <>
      <ul className={css.breadcrumbsList}>
        {breadcrumbs.map((breadcrumb) => {
          return (
            <li key={nanoid()} className={css.breadcrumbsItem}>
              <NavLink to={breadcrumb.path} className={css.breadcrumbsLink}>
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
