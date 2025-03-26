// import css from "./MainPage.module.css";
import { CenteredContent } from "../components/CenteredContent/CenteredContent";
import { Layout } from "../components/Layout/Layout";

export const MainPage = () => {
  return (
    <>
      <Layout>
        <CenteredContent>
          <h1>MainPage view</h1>
        </CenteredContent>
      </Layout>
    </>
  );
};
