import css from "./CenteredContent.module.css";

export const CenteredContent = ({ children }) => {
  return (
    <>
      <div className={css.centeredContent}>{children}</div>
    </>
  );
};
