import { nanoid } from "nanoid";
import { Product } from "../Product/Product";
import { CATEGORIES } from "../../constans/categories";
import css from "./Products.module.css";
import { useParams } from "react-router-dom";

export const Products = ({ data }) => {
  const params = useParams();

  let productsTitle;

  const activeCategory = CATEGORIES.find(
    (category) => params.category === category.path
  );

  productsTitle = activeCategory.name;

  if (params.subcategory) {
    const activeSubcategory = activeCategory.subcategories.find(
      (subcategory) => params.subcategory === subcategory.path
    );

    productsTitle = activeSubcategory.name;
  }

  return (
    <>
      <h2 className={css.productsTitle}>{productsTitle}</h2>
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
