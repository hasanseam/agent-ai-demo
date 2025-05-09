import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h3 className={styles.footerHeading}>About Us</h3>
            <p>We are Review Star. Our mission is to guide you find the best product</p>
          </div>
          
          <div className={styles.footerSection}>
            <h3 className={styles.footerHeading}>Quick Links</h3>
            <ul className={styles.footerLinks}>
              <li><a href="/">Home</a></li>
              <li><a href="/products">Products</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/about">About</a></li>
            </ul>
          </div>
          
          <div className={styles.footerSection}>
            <h3 className={styles.footerHeading}>Contact Info</h3>
            <address className={styles.address}>
              Bibliothek 5, University of Bremen <br />
              Bremen 28359 <br />
              Email: info@reviewstar.com<br />
              Phone: (123) 456-7890
            </address>
          </div>
        </div>
        
        <div className={styles.footerBottom}>
          <p>&copy; {currentYear} Review. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
