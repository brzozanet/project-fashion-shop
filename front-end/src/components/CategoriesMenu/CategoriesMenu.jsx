import css from "./CategoriesMenu.module.css";

export const CategoriesMenu = () => {
  return (
    <>
      <div className={css.container}>
        <ul className={css.menuList}>
          <li className={css.menuItem}>
            <a href="" title="CategoriesMenu 1">
              CategoriesMenu 1
            </a>
          </li>
          <li className={css.menuItem}>
            <a href="" title="CategoriesMenu 2">
              CategoriesMenu 2
            </a>
          </li>
          <li className={css.menuItem}>
            <a href="" title="CategoriesMenu 3">
              CategoriesMenu 3
            </a>
          </li>
          <li className={css.menuItem}>
            <a href="" title="CategoriesMenu 4">
              CategoriesMenu 4
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};
