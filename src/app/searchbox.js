import styles from './SearchBox.module.css';

export default function SearchBox({ placeholder = "Search..." }) {
  return (
    <div className={styles.searchBox}>
      <span className={styles.searchIcon}>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      </span>
      <input 
        type="text" 
        className={styles.searchInput} 
        placeholder={placeholder} 
      />
    </div>
  );
}