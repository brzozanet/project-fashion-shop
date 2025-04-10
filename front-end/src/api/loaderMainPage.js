import { redirect } from "react-router-dom";
import { GENDERS_MAPPING_EN } from "../constans/mappings";

export const loaderMainPage = ({ params }) => {
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  const genderEN = GENDERS_MAPPING_EN.get(params.gender);

  if (genderEN) {
    return fetch(`${BACKEND_URL}/${genderEN}`);
  }

  return redirect("/kobieta");
};
