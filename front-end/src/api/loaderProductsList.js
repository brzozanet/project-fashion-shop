import { GENDERS_MAPPING } from "../constans/mappings";

export const loaderProductList = ({ params }) => {
  const gender = GENDERS_MAPPING.get(params.gender);
  return fetch(
    `http://localhost:3000/products?gender=${gender}&category=${params.category}`
  );
};
