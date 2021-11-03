import type { NextPage } from "next"
import Head from "next/head"
import Link from "next/link"
import React from "react"
import App from "../components/App"
import styles from "../styles/Home.module.css"
import logo from "../assets/images/logo.svg"

const About: NextPage = () => (
  <div className={styles.container}>
    <Head>
      <title>Adventure Summer Camps | Outdoor Summer Camps for Kids – kwiwit</title>
      <link rel="icon" pan-favicon="" href={logo.src} />
      <link rel="apple-touch-icon" href={logo.src} />
      <link rel="android-touch-icon" href={logo.src} />
    </Head>

    <div>
      <h1>About</h1>
      <Link href="/">
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a>Home</a>
      </Link>
    </div>

    <App />
  </div>
)

export default About
