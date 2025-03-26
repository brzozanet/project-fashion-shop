import css from "./FullWidthButton.module.css";

export const FullWidthButton = ({ children }) => {
  return (
    <>
      <button className={css.fullWidthButton}>{children}</button>
    </>
  );
};
