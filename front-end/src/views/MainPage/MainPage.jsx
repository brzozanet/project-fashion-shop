import { Bestsellers } from "../../components/Bestsellers/Bestsellers";
import { Hero } from "../../components/Hero/Hero";
import { Layout } from "../../components/Layout/Layout";

export const MainPage = () => {
  return (
    <>
      <Layout>
        <Hero />
        <Bestsellers />
      </Layout>
    </>
  );
};
