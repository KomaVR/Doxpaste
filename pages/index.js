// pages/index.js
import Head from "next/head";
import Link from "next/link";
import "../public/styles.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Doxbin-Style Site</title>
        <meta name="description" content="A Doxbin-style site for managing pastes." />
      </Head>
      <div className="container">
        <h1>Doxbin-Style Site</h1>
        <p>Welcome to the site! Manage your pastes with ease.</p>
        <div className="links">
          <Link href="/api/register">Register</Link>
          <Link href="/api/login">Login</Link>
          <Link href="/api/pastes">View Pastes</Link>
        </div>
      </div>
    </>
  );
}
