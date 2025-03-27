import { CenteredContent } from "../../components/CenteredContent/CenteredContent";
import { Layout } from "../../components/Layout/Layout";
import { PageTitle } from "../../components/PageTitle/PageTitle";

export const Cart = () => {
  return (
    <>
      <Layout>
        <CenteredContent>
          <PageTitle>Koszyk</PageTitle>
          <div>Cart view</div>
        </CenteredContent>
      </Layout>
    </>
  );
};
