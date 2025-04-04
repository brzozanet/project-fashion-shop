import { FlexContainer } from "../../components/FlexContainer/FlexContainer";
import { CenteredContent } from "../../components/CenteredContent/CenteredContent";
import { ExpandableMenu } from "../../components/ExpandableMenu/ExpandableMenu";
import { Breadcrumbs } from "../../components/Breadcrumbs/Breadcrumbs";
import { Products } from "../../components/Products/Products";
import { Pagination } from "../../components/Pagination/Pagination";

export const ProductsList = () => {
  return (
    <>
      <CenteredContent>
        <FlexContainer>
          <ExpandableMenu />
          <div>
            <Breadcrumbs />
            <Products />
            <Pagination />
          </div>
        </FlexContainer>
      </CenteredContent>
    </>
  );
};
