import "../styles/normalize.scss";
import "../styles/globals.scss";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { languages } from "../config";

export async function generateStaticParams() {
  let params = [] as any;
  languages.map((lng) => params.push({ lang: lng }));
  return params;
}

export default async function RootLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: {
    lang: string;
  };
}) {
  return (
    <html lang={lang}>
      <body>
        <Header lang={lang} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
