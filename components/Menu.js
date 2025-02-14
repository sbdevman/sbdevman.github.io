import styles from './Menu.module.css'

export default function Menu() {
    return (
        <div className={styles.menuBar}>
        <ul className={styles.menuList}>
          <li className={styles.menuItem}>
            <a href="/about">About</a>
          </li>
          <li className={styles.menuItem}>
            <a href="/contact">Contact</a>
          </li>
          <li className={styles.menuItem}>
            <a href="/services">Services</a>
          </li>
        </ul>
      </div>
    )
    }