import { Layout } from "../../components/Layout/Layout";
import { CenteredContent } from "../../components/CenteredContent/CenteredContent";
import { FlexContainer } from "../../components/FlexContainer/FlexContainer";
import { ExpandableMenu } from "../../components/ExpandableMenu/ExpandableMenu";
import { Breadcrumbs } from "../../components/Breadcrumbs/Breadcrumbs";

export const ProductDetails = () => {
  return (
    <>
      <Layout>
        <CenteredContent>
          <FlexContainer>
            <ExpandableMenu />
            <div>
              <Breadcrumbs />
              <h2>Product Details</h2>
            </div>
          </FlexContainer>
        </CenteredContent>
      </Layout>
    </>
  );
};
