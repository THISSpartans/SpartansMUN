//new version
import Head from 'next/head'
import styles from '../styles/Cycles.module.css'
import React, { useState, Fragment } from 'react'
import Fade from 'react-reveal/Fade';
import Footer from './src/footer.js';
import Header from './src/header.js'
const PAGE_NAME = "Accomodation";

export default function Home() {
  //only change stuff in the MAIN tag
  return (
    <Fade cascade>
      <Head>
        <title>THISMUN – {PAGE_NAME}</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Header/>

      <Fade><main className={styles.cont}>
        <p className={styles.heading}>sample announcement</p>
        AAAA
      </main></Fade>

      <Footer/>
    </Fade>
  )
}
