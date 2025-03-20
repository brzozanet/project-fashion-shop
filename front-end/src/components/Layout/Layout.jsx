import { CategoriesMenu } from "../CategoriesMenu/CategoriesMenu";
import { Footer } from "../Footer/Footer";
import { MainContent } from "../MainContent/MainContent";

export const Layout = () => {
  return (
    <>
      <MainContent>
        <CategoriesMenu />
      </MainContent>

      <Footer />
    </>
  );
};
