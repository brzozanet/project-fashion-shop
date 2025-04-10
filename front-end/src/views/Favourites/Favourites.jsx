import { useLoaderData } from "react-router-dom";
import { CenteredContent } from "../../components/CenteredContent/CenteredContent";
import { FavouritesList } from "../../components/FavouritesList/FavouritesList";
import { PageTitle } from "../../components/PageTitle/PageTitle";

export const Favourites = () => {
  const data = useLoaderData();
  return (
    <>
      <CenteredContent>
        <PageTitle>Ulubione {`(${data.length})`}</PageTitle>
        <FavouritesList data={data} />
      </CenteredContent>
    </>
  );
};
