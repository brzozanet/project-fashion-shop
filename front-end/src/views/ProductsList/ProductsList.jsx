import { FlexContainer } from "../../components/FlexContainer/FlexContainer";
import { CenteredContent } from "../../components/CenteredContent/CenteredContent";
import { ExpandableMenu } from "../../components/ExpandableMenu/ExpandableMenu";
import { Breadcrumbs } from "../../components/Breadcrumbs/Breadcrumbs";
import { Products } from "../../components/Products/Products";
import { Pagination } from "../../components/Pagination/Pagination";
import { useLoaderData } from "react-router-dom";

export const ProductsList = () => {
  const data = useLoaderData();

  return (
    <>
      <CenteredContent>
        <FlexContainer>
          <ExpandableMenu />
          <div>
            <Breadcrumbs id={data.id} name={data.name} />
            <Products data={data} />
            <Pagination />
          </div>
        </FlexContainer>
      </CenteredContent>
    </>
  );
};
