import { Layout } from "../../components/Layout/Layout";
import { FlexContainer } from "../../components/FlexContainer/FlexContainer";
import { CenteredContent } from "../../components/CenteredContent/CenteredContent";
import { ExpandableMenu } from "../../components/ExpandableMenu/ExpandableMenu";
import { Breadcrumbs } from "../../components/Breadcrumbs/Breadcrumbs";
import { Products } from "../../components/Products/Products";

export const ProductsList = () => {
  return (
    <>
      <Layout>
        <CenteredContent>
          <FlexContainer>
            <ExpandableMenu />
            <div>
              <Breadcrumbs />
              <Products />
            </div>
          </FlexContainer>
        </CenteredContent>
      </Layout>
    </>
  );
};
