import css from "./CartProduct.module.css";

export const CartProduct = ({ brand, name, image, description, price }) => {
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
      <div className={css.cartProduct}>
        <div className={css.cartProductBox}>
          <div className={css.cartProductPhoto}>
            <img
              src={image}
              alt={name}
              title={name}
              className={css.cartProductPhotoImg}
            />
          </div>
        </div>
        <div className={css.cartProductBox}>
          <h3 className={css.cartProductTitle}>
            {brand} | {name}
          </h3>
          <p>{truncateTextSmart(description, 100)}</p>
        </div>
        <div className={css.cartProductBox}>
          <p className={css.cartProductPrice}>{price} zł</p>
        </div>
      </div>
    </>
  );
};
