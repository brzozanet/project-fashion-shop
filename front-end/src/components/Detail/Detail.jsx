import css from "./Detail.module.css";

export const Detail = ({ brand, name }) => {
  return (
    <>
      <div className={css.detail}>
        {brand} {name}
      </div>
    </>
  );
};
