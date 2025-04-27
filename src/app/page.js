import Image from "next/image";
import styles from "./page.module.css";
import Header from "./header";
import ProductList from "./ProductList";
import Review from "./review";

export default function Home() {
  return (
    <main className="main-container">
    <Header />
      <div className="container">
        {/*<h1 className="page-title">Our Featured Products</h1>
        <ProductList />*/}
        <Review/>
        

      </div>
    </main>
  );
}
