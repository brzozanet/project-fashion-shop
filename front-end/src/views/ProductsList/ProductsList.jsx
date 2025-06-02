import { FlexContainer } from "../../components/FlexContainer/FlexContainer";
import { CenteredContent } from "../../components/CenteredContent/CenteredContent";
import { ExpandableMenu } from "../../components/ExpandableMenu/ExpandableMenu";
import { Breadcrumbs } from "../../components/Breadcrumbs/Breadcrumbs";
import { Products } from "../../components/Products/Products";
import { Pagination } from "../../components/Pagination/Pagination";
import { useLoaderData } from "react-router-dom";

export const ProductsList = () => {
  const data = useLoaderData();
  const products = data[0];
  const favourites = data[1];

  return (
    <>
      <CenteredContent>
        <FlexContainer>
          <ExpandableMenu />
          <div>
            <Breadcrumbs id={products.id} name={products.name} />
            <Products products={products} favourites={favourites} />
            <Pagination />
          </div>
        </FlexContainer>
      </CenteredContent>
    </>
  );
};
