import { CenteredContent } from "../../components/CenteredContent/CenteredContent";
import { PageTitle } from "../../components/PageTitle/PageTitle";
import { Link } from "react-router-dom";
import IMG_ERROR from "../../assets/error.png";
import css from "./NotFound.module.css";

export const NotFound = () => {
  return (
    <>
      <CenteredContent>
        <div className={css.notFound}>
          <img src={IMG_ERROR} alt="błąd" />
          <PageTitle>Nie ma takiej strony :-{"("}</PageTitle>
          <Link to="../kobieta">Wróć do strony głównej</Link>
        </div>
      </CenteredContent>
    </>
  );
};
