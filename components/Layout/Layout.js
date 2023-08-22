import Link from "next/link";
import styles from '../Layout/Layout.module.css';

const Layout = ({children}) => {
  return (
    <>
      <Link href='/'>
      <header className={styles.header}>
        <h2>Car Expo</h2>
        <p>Choose and Buy your Car</p>
      </header>
      </Link>
      <div className={styles.container}>{children}</div>
      <footer className={styles.footer}>
        <a href="https://github.com/jamalshamsi1988/auto-expo" target="_blank" rel="noreferrer">
            Jamal Shamsi Next.js | Car shope project &copy;
        </a>
      </footer>
    </>
  )
}

export default Layout
