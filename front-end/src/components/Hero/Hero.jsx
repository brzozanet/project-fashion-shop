import { CenteredContent } from "../CenteredContent/CenteredContent";
import IMAGE_HERO from "../../assets/heroSummersaleFull.jpg";
import css from "./Hero.module.css";
import { FullWidthButton } from "../FullWidthButton/FullWidthButton";

export const Hero = () => {
  return (
    <>
      <div
        className={css.hero}
        style={{ backgroundImage: `url(${IMAGE_HERO})` }}
      >
        <CenteredContent>
          <div className={css.promo}>
            <h2 className={css.promoTitle}>Letnie promocje do -70%</h2>
            <p className={css.promoText}>Tylko najlepsze okazje!</p>
            <FullWidthButton>Sprawdź produkty</FullWidthButton>
          </div>
        </CenteredContent>
      </div>
    </>
  );
};
