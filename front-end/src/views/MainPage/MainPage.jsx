import { useLoaderData } from "react-router-dom";
import { Bestsellers } from "../../components/Bestsellers/Bestsellers";
import { Hero } from "../../components/Hero/Hero";

export const MainPage = () => {
  const data = useLoaderData();

  return (
    <>
      <Hero imageUrl={data.heroImageUrl} />
      <Bestsellers bestsellersData={data.bestsellers} />
    </>
  );
};
