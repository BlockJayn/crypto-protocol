import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import styles from "../styles/Home.module.css";
import React, { ReactNode } from "react";

export default function Home() {
  return (
    <>
      <Navbar />

      <div className={styles.container}>
        <Head>
          <title>Crypto Protocol</title>
          <meta name="description" content="A Crypto Protocol" />
          <link rel="icon" href="/logo.svg" />
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>Welcome to X-Protocol</h1>

          <p className={styles.description}>Get started now!</p>

          <div className={styles.grid}>
            <a href="https://nextjs.org/docs" className={styles.card}>
              <h2>Documentation &rarr;</h2>
              <p>Find in-depth information about Next.js features and API.</p>
            </a>



            <a
              href="https://github.com/vercel/next.js/tree/canary/examples"
              className={styles.card}
            >
              <h2>Examples &rarr;</h2>
              <p>Discover and deploy boilerplate example Next.js projects.</p>
            </a>


          </div>
        </main>

        <footer className={styles.footer}>
          Powered by BlockJayn
          <span className={styles.logo}>
            <Image src="/logo.svg" alt="Vercel Logo" width={16} height={16} />
          </span>
        </footer>
      </div>
    </>
  );
}
