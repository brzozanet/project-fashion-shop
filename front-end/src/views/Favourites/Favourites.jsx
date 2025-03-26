import { CenteredContent } from "../../components/CenteredContent/CenteredContent";
import { FavouritesList } from "../../components/FavouritesList/FavouritesList";
import { Layout } from "../../components/Layout/Layout";
import { PageTitle } from "../../components/PageTitle/PageTitle";

export const Favourites = () => {
  return (
    <>
      <Layout>
        <CenteredContent>
          <PageTitle>Ulubione</PageTitle>
          <FavouritesList />
        </CenteredContent>
      </Layout>
    </>
  );
};
