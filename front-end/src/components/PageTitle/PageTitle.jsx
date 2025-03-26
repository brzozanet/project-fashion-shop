import css from "./PageTitle.module.css";

export const PageTitle = ({ children }) => {
  return (
    <>
      <h2 className={css.pageTitle}>{children}</h2>
    </>
  );
};
