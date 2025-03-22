import { CategoriesMenu } from "../CategoriesMenu/CategoriesMenu";
import { CurrencySelector } from "../CurrencySelector/CurrencySelector";
import { Footer } from "../Footer/Footer";
import { IconMenu } from "../IconMenu/IconMenu";
import { Logo } from "../Logo/Logo";
import { MainContent } from "../MainContent/MainContent";
import { MainMenu } from "../MainMenu/MainMenu";
import { TopBar } from "../TopBar/TopBar";
import css from "./Layout.module.css";

export const Layout = () => {
  return (
    <>
      <MainContent>
        <TopBar>
          <MainMenu />
          <Logo />
          <div className={css.currencyAndIcons}>
            <CurrencySelector />
            <IconMenu />
          </div>
        </TopBar>
        <CategoriesMenu />
      </MainContent>

      <Footer />
    </>
  );
};
