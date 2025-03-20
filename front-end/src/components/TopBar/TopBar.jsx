import css from "./TopBar.module.css";

export const TopBar = ({ children }) => {
  return (
    <>
      <div className={css.topBar}>{children}</div>
    </>
  );
};
