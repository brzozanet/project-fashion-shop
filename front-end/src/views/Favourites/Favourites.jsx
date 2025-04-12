import { CenteredContent } from "../../components/CenteredContent/CenteredContent";
import { FavouritesList } from "../../components/FavouritesList/FavouritesList";
import { PageTitle } from "../../components/PageTitle/PageTitle";

export const Favourites = () => {
  return (
    <>
      <CenteredContent>
        <PageTitle>Ulubione /.../</PageTitle>
        <FavouritesList />
      </CenteredContent>
    </>
  );
};
