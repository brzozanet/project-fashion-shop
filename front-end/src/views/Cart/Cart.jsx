import { CartProductsList } from "../../components/CartProductsList/CartProductsList";
import { CartSummary } from "../../components/CartSummary/CartSummary";
import { CenteredContent } from "../../components/CenteredContent/CenteredContent";
import { Layout } from "../../components/Layout/Layout";
import { PageTitle } from "../../components/PageTitle/PageTitle";

export const Cart = () => {
  return (
    <>
      <Layout>
        <CenteredContent>
          <PageTitle>Koszyk</PageTitle>
          <div>
            <CartProductsList />
            <CartSummary />
          </div>
        </CenteredContent>
      </Layout>
    </>
  );
};
