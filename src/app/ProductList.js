import Image from 'next/image';
import styles from './ProductList.module.css';

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    image: "/images/headphones.jpg",
    review: "Amazing sound quality with noise cancellation. The battery life is impressive, lasting over 20 hours on a single charge. Comfortable to wear for extended periods."
  },
  {
    id: 2,
    name: "Smart Watch",
    image: "/images/smartwatch.jpg",
    review: "Tracks all my fitness activities accurately. The sleep monitoring feature is particularly helpful. The battery lasts about 5 days with moderate use."
  },
  {
    id: 3,
    name: "Portable Bluetooth Speaker",
    image: "/images/bluetooth.jpg",
    review: "Incredible sound for its size. Water-resistant and perfect for outdoor activities. The battery life is good, and it pairs easily with all my devices."
  }
];

export default function ProductList() {
  return (
    <div className={styles.productRow}>
      {products.map((product) => (
        <div key={product.id} className={styles.productCard}>
          <div className={styles.imageContainer}>
            <Image 
              src={product.image}
              alt={product.name}
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className={styles.productContent}>
            <h2 className={styles.productName}>{product.name}</h2>
            <p className={styles.productReview}>{product.review}</p>
          </div>
        </div>
      ))}
    </div>
  );
}