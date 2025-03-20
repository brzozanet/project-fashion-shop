import css from "./MainContent.module.css";

export const MainContent = ({ children }) => {
  return (
    <>
      <div className={css.container}>{children}</div>
    </>
  );
};
