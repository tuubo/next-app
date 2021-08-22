import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>HOME | Next App</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Title</h1>
        Main area
      </main>

      <footer className={styles.footer}>Footer</footer>
    </div>
  );
}
