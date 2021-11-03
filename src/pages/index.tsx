/* eslint-disable @next/next/no-img-element */
import React from "react"
import type { NextPage } from "next"
import Head from "next/head"
import Link from "next/link"
import Counter from "../features/counter/Counter"
import styles from "../styles/Home.module.css"
import logo from "../assets/images/logo.svg"

const IndexPage: NextPage = () => (
  <div className={styles.container}>
    <Head>
      <title>Adventure Summer Camps | Outdoor Summer Camps for Kids – kwiwit</title>
      <link rel="icon" pan-favicon="" href={logo.src} />
      <link rel="apple-touch-icon" href={logo.src} />
      <link rel="android-touch-icon" href={logo.src} />
    </Head>

    <div>
      <h1>Home</h1>
      <Link href="/about">
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a href="#">About</a>
      </Link>
    </div>

    <br /><br />

    <header className={styles.header}>
      <img src={logo.src} className={styles.logo} alt="logo" />
      <Counter />
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <span>
        <span>Learn </span>
        <a
          className={styles.link}
          href="https://reactjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          React
        </a>
        <span>, </span>
        <a
          className={styles.link}
          href="https://redux.js.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Redux
        </a>
        <span>, </span>
        <a
          className={styles.link}
          href="https://redux-toolkit.js.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Redux Toolkit
        </a>
        ,<span> and </span>
        <a
          className={styles.link}
          href="https://react-redux.js.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          React Redux
        </a>
      </span>
    </header>
  </div>
)

export default IndexPage
