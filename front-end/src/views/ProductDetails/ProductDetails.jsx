import { Layout } from "../../components/Layout/Layout";
import { CenteredContent } from "../../components/CenteredContent/CenteredContent";
import { FlexContainer } from "../../components/FlexContainer/FlexContainer";
import { ExpandableMenu } from "../../components/ExpandableMenu/ExpandableMenu";
import { Breadcrumbs } from "../../components/Breadcrumbs/Breadcrumbs";
import { Photos } from "../../components/Photos/Photos";
import { Detail } from "../../components/Detail/Detail";
import css from "./ProductDetails.module.css";

export const ProductDetails = () => {
  const productDetailsMockup = {
    id: 1,
    gender: "men",
    category: "odziez",
    subcategory: "koszulki",
    productName: "T-Shirt",
    brand: "Top Brand",
    pricePLN: 49,
    priceUSD: 10,
    photos: [
      "http://localhost:3000/product-photos/man-t-shirt-1.jpg",
      "http://localhost:3000/product-photos/man-t-shirt-4.jpg",
      "http://localhost:3000/product-photos/man-t-shirt-3.jpg",
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.",
    maintenanceInfo:
      "Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu. Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu",
  };

  return (
    <>
      <Layout>
        <CenteredContent>
          <FlexContainer>
            <ExpandableMenu />
            <div className={css.productDetailsWithBreadcrumbs}>
              <Breadcrumbs />
              <div className={css.productDetailContainer}>
                <Photos
                  photos={productDetailsMockup.photos}
                  name={productDetailsMockup.name}
                />
                <Detail
                  brand={productDetailsMockup.brand}
                  name={productDetailsMockup.name}
                  price={productDetailsMockup.pricePLN}
                  description={productDetailsMockup.description}
                  maintenanceInfo={productDetailsMockup.maintenanceInfo}
                />
              </div>
            </div>
          </FlexContainer>
        </CenteredContent>
      </Layout>
    </>
  );
};
