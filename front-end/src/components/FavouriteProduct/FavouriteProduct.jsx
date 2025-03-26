import css from "./FavouriteProduct.module.css";

export const FavouriteProduct = ({ image, name, description, price }) => {
  const truncateTextSmart = (text, maxLength) => {
    if (text.length <= maxLength) return text;

    const truncated = text.slice(0, maxLength);
    const lastSpace = truncated.lastIndexOf(" ");

    return lastSpace === -1
      ? truncated + "..."
      : truncated.slice(0, lastSpace) + "...";
  };

  return (
    <>
      <div className={css.favouriteProduct}>
        <div className={css.favouriteBox}>
          <div className={css.favouritePhotoContainer}>
            <img
              src={image}
              alt={name}
              title={name}
              className={css.favouritePhotoImg}
            />
          </div>
        </div>
        <div className={css.favouriteBox}>
          <h3 className={css.favouriteTitle}>{name}</h3>
          <p>{truncateTextSmart(description, 100)}</p>
        </div>
        <div className={css.favouriteBox}>
          <p>{price} zł</p>
        </div>
      </div>
    </>
  );
};
