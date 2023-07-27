import { renderComponent } from "../utils/renderer";

const Home = async ({ params: { lang } }: any) => {
  let pageData;
  try {
    pageData = await import(`../i18n/content/${lang}/home.json`).then(
      (m) => m.default
    );
  } catch (error) {}
  return (
    <>
      <main>
        {pageData?.map((component: any, index: number) =>
          renderComponent(component, index)
        )}
      </main>
    </>
  );
};

export default Home;
