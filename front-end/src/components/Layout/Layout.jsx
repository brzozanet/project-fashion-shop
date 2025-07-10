import { CURRENCIES, DEFAULT_CURRENCY } from "../../constans/curriencies";
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
import { useState } from "react";

export const Layout = () => {
  const [currency, setCurrency] = useState(DEFAULT_CURRENCY);

  console.log(currency);

  return (
    <>
      <MainContent>
        <CurrencyContext value={[currency, setCurrency]}>
          <TopBar>
            <MainMenu />
            <Logo />
            <div>
              <CurrencySelector setCurrency={setCurrency} />
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
