import { redirect } from "react-router-dom";
import { GENDERS_MAPPING } from "../constans/mappings";
import { CATEGORIES } from "../constans/categories";

export const loaderProductList = ({ params }) => {
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  const gender = GENDERS_MAPPING.get(params.gender);

  const existingCategory = CATEGORIES.find((category) => {
    return category.path === params.category;
  });
  console.log(existingCategory);

  const existingSubcategory = existingCategory.subcategories.find(
    (subcategory) => {
      return subcategory.path === params.subcategory;
    }
  );
  console.log(existingSubcategory);

  const searchParams = new URLSearchParams();
  searchParams.append("gender", gender);

  if (gender && existingCategory) {
    if (params.category) {
      searchParams.append("category", params.category);
    }

    if (params.subcategory) {
      searchParams.append("subcategory", params.subcategory);
    }

    return fetch(`${BACKEND_URL}/products?${searchParams.toString()}`);
  }

  return redirect("/kobieta");
};
