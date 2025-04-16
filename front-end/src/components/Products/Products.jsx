import { nanoid } from "nanoid";
import { Product } from "../Product/Product";
import { CATEGORIES } from "../../constans/categories";
import { useParams } from "react-router-dom";
import css from "./Products.module.css";
import { useEffect, useState } from "react";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const Products = ({ data }) => {
  const [page, setPage] = useState(1);
  const [isBottom, setIsBottom] = useState(false);
  const [products, setProducts] = useState(data);

  console.log(isBottom);

  useEffect(() => {
    const fetchProducts = async (p) => {
      const response = await fetch(
        `${BACKEND_URL}/products/?gender=men&category=odziez&subcategory=koszulki&_page=${p}`
      );

      const json = await response.json();
      console.log(json);

      setProducts((state) => [...state, json]);
    };

    fetchProducts(page);
  }, [page]);

  //

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;

      // if (scrollTop + windowHeight >= fullHeight) {
      //   setIsBottom(true);
      // } else {
      //   setIsBottom(false);
      // }

      setIsBottom(scrollTop + windowHeight >= fullHeight);
      setPage((state) => state + 1);
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //

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
      <div>{isBottom}</div>
      <h2 className={css.productsTitle}>{productsTitle}</h2>
      <div className={css.products}>
        {products.map((product) => {
          return (
            <Product
              id={product.id}
              name={product.name}
              price={product.pricePLN}
              photo={product.photos[0]}
              category={product.category}
              subcategory={product.subcategory}
              key={nanoid()}
            />
          );
        })}
      </div>
    </>
  );
};
