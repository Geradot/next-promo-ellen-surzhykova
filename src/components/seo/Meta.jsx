import Head from "next/head";

export default function Meta({ children }) {
  return (
    <>
      <Head>
        <title>
          Ellen Surzhykova | A Professional Dress Maker from Ukraine
        </title>
        <meta
          name="description"
          content="Find your perfect custom-made dress at our online boutique. I specialize in creating stunning wedding dresses, stylish cocktail dresses, and chic informal wear. Discover the dress of your dreams."
        />
        <meta
          name="og:title"
          content="Ellen Surzhykova | A Professional Dress Maker from Ukraine"
        />
      </Head>
      {children}
    </>
  );
}
