import { redirect } from "react-router-dom";
import { CATEGORIES } from "../constans/categories";
import { GENDERS_MAPPING } from "../constans/mappings";

export const loaderProductsList = ({ params }) => {
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  const gender = GENDERS_MAPPING.get(params.gender);
  const searchParams = new URLSearchParams();

  searchParams.append("gender", gender);

  const categoryExist = CATEGORIES.find(
    (category) => category.path === params.category
  );

  if (categoryExist) {
    searchParams.append("category", params.category);

    const subcategoryExist = categoryExist.subcategories.find(
      (subcategory) => subcategory.path === params.subcategory
    );

    // FIXME: not working
    if (params.subcategory && !subcategoryExist) {
      console.log("mam cie!");
    }

    if (subcategoryExist) {
      searchParams.append("subcategory", params.subcategory);
    }

    return fetch(`${BACKEND_URL}/products?${searchParams.toString()}`);
  }
  return redirect(`/${gender}`);
};
