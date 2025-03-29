import { NavLink } from "react-router-dom";
import { nanoid } from "nanoid";
import ICON_ARROW from "../../assets/icon_arrow.svg";

import css from "./Breadcrumbs.module.css";

export const Breadcrumbs = () => {
  const breadcrumbsMockup = [
    { name: "Kobieta", path: "kobieta" },
    { name: "Odzież", path: "odziez" },
    { name: "Swetry", path: "swetry" },
  ];

  return (
    <>
      <ul className={css.breadcrumbsList}>
        {breadcrumbsMockup.map((breadcrumb) => {
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
