import Meta from "../seo/Meta";
import Footer from "./footer/Footer";
import Header from "./header/Header";

import { Comfortaa } from "next/font/google";
import { Allura } from "next/font/google";

const allura = Allura({ weight: ["400"], subsets: ["latin"] });
const comfortaa = Comfortaa({subsets: ['latin']});

export default function Layout({ children }) {
  return (
    <Meta>
      <Header fontFamily={{allura, comfortaa}} />
      <main className={`${comfortaa.className} main`}>{children}</main>
      <Footer fontFamily={comfortaa} />
    </Meta>
  );
}
