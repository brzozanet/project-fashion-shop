import css from "./FlexContainer.module.css";

export const FlexContainer = ({ children }) => {
  return (
    <>
      <div className={css.flexContainer}>{children}</div>
    </>
  );
};
