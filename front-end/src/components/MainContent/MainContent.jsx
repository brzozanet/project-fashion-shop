import css from "./MainContent.module.css";

export const MainContent = ({ children }) => {
  return (
    <>
      <div className={css.mainContent}>{children}</div>
    </>
  );
};
