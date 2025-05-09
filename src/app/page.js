import Image from "next/image";
import styles from "./page.module.css";
import Header from "./header";
import ProductList from "./ProductList";
import Review from "./review";
import Footer from "./footer";
import SearchBox from "./searchbox";
import Carousel from "./Carousel";

export default function Home() {
  return (
    <div className={styles.pageWrapper}>
      <main className={styles.mainContainer}>
    <Header />
    
      <div className={styles.container}>
        {/*<h1 className="page-title">Our Featured Products</h1>
        <ProductList />*/}
        <Review/>
        <div className={styles.containerside}>
        <div className={styles.searchContainer}>
          <SearchBox/>
        </div>
        <div className={styles.recommendationContainer}>
          Here recommed post will go.
        </div>
        </div>
      </div>
      <div className={styles.container}>
      <Carousel/>
      </div>
      </main>
      <Footer/>
    </div>
   
  );
}

