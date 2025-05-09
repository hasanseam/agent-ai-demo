import styles from "./review.module.css";
import Image from "next/image";

export default function Review() {
  return (
    <div className={styles["container-review"]}>
      <div>
        <div className={styles["title-text"]}>
          GIGABYTE G5
        </div>
        <div className={styles["metadata-title-text"]}>
          <div>2 min read</div>
          <div>Nov 20,2024</div>
          <div>Updated April 27, 2025</div>
          <div className={styles["star-rating"]}>
            <span className={styles["rating-label"]}>Rating: </span>
            <span className={styles["star-filled"]}>★</span>
            <span className={styles["star-filled"]}>★</span>
            <span className={styles["star-filled"]}>★</span>
            <span className={styles["star-filled"]}>★</span>
            <span className={styles["star-half"]}>★</span>
            <span className={styles["rating-text"]}>4.5/5</span>
          </div>
        </div>
      </div>
      <div className={styles["review-container"]}>
        <div className={styles["image-container"]}>
          <Image 
            src="/images/gigabyte5.jpg"
            alt="GIGABYTE G5 Gaming Laptop"
            width={400}
            height={300}
            className={styles["review-image"]}
          />
        </div>
        <div className={styles["review-text"]}>
            <p>Beneath the Gigabyte G5&apos;s modest exterior lies a surprisingly capable gaming laptop. It&apos;s powered by an Intel i7-13620H processor and a GeForce RTX 4050 GPU — a combo that should handle games like Stalker 2: Heart of Chernobyl comfortably on medium settings. The 15.6-inch, 1080p display with a 144Hz refresh rate adds to the experience, delivering smooth, vibrant visuals that enhance fast-paced gameplay.</p>
            <p>Performance-wise, the G5 doesn&apos;t disappoint. It runs quietly and manages demanding titles with ease. The downside? Battery life is underwhelming — though, to be fair, that&apos;s a common trade-off in gaming laptops, where you&apos;ll typically need to stay plugged in for longer sessions. Aesthetically, it&apos;s a little plain for my taste, but that&apos;s a minor gripe considering what it offers for the price.</p>
            <p>
                Pros
            </p>
            <ul>
                <li>Well-balanced CPU, GPU, and display specs</li>
                <li>Quiet operation</li>
            </ul>
            <p>
                Cons
            </p>
            <ul>
                <li>Disappointing battery life</li>
            </ul>
            <div className={styles["button-container"]}>
             <button className={styles["check-price-button"]}>Check the latest Price</button>
            </div>
        </div>
      </div>
    </div>
  );
}
