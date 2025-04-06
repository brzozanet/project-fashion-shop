import { nanoid } from "nanoid";
import { Product } from "../Product/Product";
import { useParams } from "react-router-dom";
import { CATEGORIES } from "../../constans/categories";
import css from "./Products.module.css";

export const Products = ({ data }) => {
  const params = useParams();

  // const categoryExist = CATEGORIES.find((category) => {
  //   return category.path === params.category;
  // });

  // console.log(categoryExist);

  // console.log(CATEGORIES.category);

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
