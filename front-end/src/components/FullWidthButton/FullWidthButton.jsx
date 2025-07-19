import css from "./FullWidthButton.module.css";

export const FullWidthButton = ({ children, onClick, disabled, ...props }) => {
  return (
    <>
      <button
        className={`${css.fullWidthButton} ${disabled ? css.disabled : ""}`}
        onClick={onClick}
        {...props}
      >
        {children}
      </button>
    </>
  );
};
