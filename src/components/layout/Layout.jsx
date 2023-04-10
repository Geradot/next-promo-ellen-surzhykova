import Meta from "../seo/Meta";
import Footer from "./footer/Footer";
import Header from "./header/Header";

export default function Layout({ children }) {
  return (
    <Meta>
      <Header />
      <main className="main">{children}</main>
      <Footer />
    </Meta>
  );
}
