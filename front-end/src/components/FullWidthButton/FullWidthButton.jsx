import css from "./FullWidthButton.module.css";

export const FullWidthButton = ({ children, onClick, ...props }) => {
  return (
    <>
      <button className={css.fullWidthButton} onClick={onClick} {...props}>
        {children}
      </button>
    </>
  );
};
