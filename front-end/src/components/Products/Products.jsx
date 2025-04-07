import { nanoid } from "nanoid";
import { Product } from "../Product/Product";
import css from "./Products.module.css";

export const Products = ({ data }) => {
  const activeProductsCategoryMockup = "Swetry";

  return (
    <>
      <h2 className={css.productsTitle}>{activeProductsCategoryMockup}</h2>
      <div className={css.products}>
        {data.map((product) => {
          return (
            <Product
              name={product.name}
              price={product.pricePLN}
              photo={product.photos[0]}
              key={nanoid()}
            />
          );
        })}
      </div>
    </>
  );
};
