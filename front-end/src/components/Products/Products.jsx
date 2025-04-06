import { nanoid } from "nanoid";
import { Product } from "../Product/Product";
import css from "./Products.module.css";
import { useParams } from "react-router-dom";

export const Products = ({ data }) => {
  const params = useParams();

  let activeProductsCategory;

  if (params.subcategory) {
    activeProductsCategory = params.subcategory;
  } else if (params.category) {
    activeProductsCategory = params.category;
  } else {
    activeProductsCategory = params.gender;
  }

  return (
    <>
      <h2 className={css.productsTitle}>{activeProductsCategory}</h2>
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
