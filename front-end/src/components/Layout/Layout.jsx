import { Outlet } from "react-router-dom";
import { CategoriesMenu } from "../CategoriesMenu/CategoriesMenu";
import { CurrencySelector } from "../CurrencySelector/CurrencySelector";
import { Footer } from "../Footer/Footer";
import { IconMenu } from "../IconMenu/IconMenu";
import { Logo } from "../Logo/Logo";
import { MainContent } from "../MainContent/MainContent";
import { MainMenu } from "../MainMenu/MainMenu";
import { TopBar } from "../TopBar/TopBar";
import { CurrencyContext } from "../../contexts/currencyContext";
import { useCurrency } from "../../hooks/useCurrency";

export const Layout = () => {
  const [currency, setCurrency] = useCurrency();

  return (
    <>
      <MainContent>
        <CurrencyContext value={[currency, setCurrency]}>
          <TopBar>
            <MainMenu />
            <Logo />
            <div>
              <CurrencySelector />
              <IconMenu />
            </div>
          </TopBar>
          <CategoriesMenu />
          <Outlet />
        </CurrencyContext>
      </MainContent>
      <Footer />
    </>
  );
};
