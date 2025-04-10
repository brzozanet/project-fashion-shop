import { redirect } from "react-router-dom";
import { CATEGORIES } from "../constans/categories";
import { GENDERS_MAPPING_EN } from "../constans/mappings";

export const loaderProductsList = ({ params }) => {
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  const genderEN = GENDERS_MAPPING_EN.get(params.gender);

  const searchParams = new URLSearchParams();

  searchParams.append("gender", genderEN);

  const foundCategory = CATEGORIES.find(
    (category) => category.path === params.category
  );

  if (foundCategory) {
    searchParams.append("category", params.category);

    const foundSubcategory = foundCategory.subcategories.find(
      (subcategory) => subcategory.path === params.subcategory
    );

    if (params.subcategory && !foundSubcategory) {
      return redirect(`/${params.gender}/${params.category}`);
    }

    if (foundSubcategory) {
      searchParams.append("subcategory", params.subcategory);
    }

    return fetch(`${BACKEND_URL}/products?${searchParams.toString()}`);
  }
  return redirect(`/${params.gender}`);
};
