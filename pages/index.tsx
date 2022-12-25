import { Banner, Header, ProductFeed } from "@/components";
import { Inter } from "@next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });
type HomeProps = {
  productList: any[];
};
export async function getServerSideProps(context: any) {
  const productList = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );
  return {
    props: {
      productList,
    },
  };
}
export default function Home({ productList }: HomeProps) {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazon</title>
        <meta name="description" content="Amazon" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="max-w-screen-2xl mx-auto">
        <Banner />
        <ProductFeed productList={productList} />
      </main>
    </div>
  );
}
