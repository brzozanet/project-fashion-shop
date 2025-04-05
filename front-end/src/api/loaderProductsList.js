import { GENDERS_MAPPING } from "../constans/mappings";

export const loaderProductList = ({ params }) => {
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  const gender = GENDERS_MAPPING.get(params.gender);

  const searchParams = new URLSearchParams();
  searchParams.append("gender", gender);

  if (params.category) {
    searchParams.append("category", params.category);
  }

  if (params.subcategory) {
    searchParams.append("subcategory", params.subcategory);
  }

  return fetch(`${BACKEND_URL}/products?${searchParams.toString()}`);
};
