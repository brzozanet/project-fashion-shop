import { CartProductsList } from "../../components/CartProductsList/CartProductsList";
import { CenteredContent } from "../../components/CenteredContent/CenteredContent";
import { Layout } from "../../components/Layout/Layout";
import { PageTitle } from "../../components/PageTitle/PageTitle";

export const Cart = () => {
  return (
    <>
      <Layout>
        <CenteredContent>
          <PageTitle>Koszyk</PageTitle>
          <CartProductsList />
        </CenteredContent>
      </Layout>
    </>
  );
};
