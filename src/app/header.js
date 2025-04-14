import Link from 'next/link';
import styles from './header.module.css';

export default function Header() {
    return (
      <header className={styles.header}>
        <div className={styles.container}>
          <nav className={styles.nav}>
            <div className={styles.logo}>Review Star</div>
            <ul className={styles.navList}>
              <li>
                <Link href="/" className={styles.navLink}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className={styles.navLink}>
                  Products
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
  
  