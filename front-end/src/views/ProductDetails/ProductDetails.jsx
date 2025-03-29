import { Layout } from "../../components/Layout/Layout";
import { CenteredContent } from "../../components/CenteredContent/CenteredContent";
import { FlexContainer } from "../../components/FlexContainer/FlexContainer";
import { ExpandableMenu } from "../../components/ExpandableMenu/ExpandableMenu";
import { Breadcrumbs } from "../../components/Breadcrumbs/Breadcrumbs";

export const ProductDetails = () => {
  const productDetailsMockup = [
    {
      id: 28,
      gender: "women",
      category: "odziez",
      subcategory: "koszulki",
      name: "Biały Sweter",
      brand: "Sun zi",
      pricePLN: 99,
      priceEUR: 59,
      photos: [
        "http://localhost:3000/product-photos/women-sweater-1.jpg",
        "http://localhost:3000/product-photos/women-trousers-2.jpg",
        "http://localhost:3000/product-photos/women-trousers-1.jpg",
      ],
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.",
      maintenanceInfo:
        "Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu",
    },
  ];

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
