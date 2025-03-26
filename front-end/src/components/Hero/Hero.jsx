import { CenteredContent } from "../CenteredContent/CenteredContent";
import IMAGE_HERO from "../../assets/heroSummersaleFull.jpg";
import css from "./Hero.module.css";

export const Hero = () => {
  return (
    <>
      <div
        className={css.hero}
        style={{ backgroundImage: `url(${IMAGE_HERO})` }}
      >
        <CenteredContent>
          <div className={css.promo}>
            <h2>Letnie promocje do -70%</h2>
            <p>Tylko najlepsze okazje!</p>
            <button>Sprawdź produkty</button>
          </div>
        </CenteredContent>
      </div>
    </>
  );
};
