import { redirect } from "react-router-dom";
import { GENDERS_MAPPING } from "../constans/mappings";

export const loaderMainPage = ({ params }) => {
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  const gender = GENDERS_MAPPING.get(params.gender);

  if (gender) {
    return fetch(`${BACKEND_URL}/${gender}`);
  }

  return redirect("/404");
};
