import { redirect } from "react-router-dom";
import { GENDERS_MAPPING } from "../constans/mappings";
import { CATEGORIES } from "../constans/categories";

export const loaderProductList = ({ params }) => {
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  const gender = GENDERS_MAPPING.get(params.gender);

  const categoryExist = CATEGORIES.find((category) => {
    return category.path === params.category;
  });

  const searchParams = new URLSearchParams();
  searchParams.append("gender", gender);

  if (gender && categoryExist) {
    if (params.subcategory) {
      const subcategoryExist = categoryExist.subcategories.find(
        (subcategory) => {
          return subcategory.path === params.subcategory;
        }
      );

      if (!subcategoryExist) {
        return redirect(`/${params.gender}/${params.category}`);
      }
      searchParams.append("subcategory", params.subcategory);
    }

    if (categoryExist) {
      searchParams.append("category", params.category);
    }

    return fetch(`${BACKEND_URL}/products?${searchParams.toString()}`);
  }

  return redirect(`/${params.gender}`);
};
