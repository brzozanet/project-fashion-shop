import css from "./Button.module.css";

export const Button = ({ children, onClick }) => {
  return (
    <>
      <div className={css.button} onClick={onClick}>
        {children}
      </div>
    </>
  );
};
