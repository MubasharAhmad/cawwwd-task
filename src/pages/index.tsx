import Head from "next/head";
import Navbar from "./components/Navbar";
import FilterMenu from "./components/FilterMenu";
import Products from "./components/Products";

export default function Home() {
  return (
    <>
      <Head>
        <title>Cawwwd Task</title>
      </Head>
      <main>
        <Navbar />
        <div className="flex px-8 my-5 gap-x-5">
          <FilterMenu />
          <Products />
        </div>
      </main>
    </>
  );
}
