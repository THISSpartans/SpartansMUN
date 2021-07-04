//new version
import Head from 'next/head'
import styles from '../styles/Cycles.module.css'
import React, { useState, Fragment } from 'react'
import Fade from 'react-reveal/Fade';
import Footer from './src/footer.js';
import Header from './src/header.js'
const PAGE_NAME = "Register";

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
        <iframe className={styles.form} src="https://forms.office.com/Pages/ResponsePage.aspx?id=Kg2a5b7u2U6De0teNfqKAGTI6dV50OFLkBB2piqgzy9UQ1dFUjdaTTlBTkxXVlFVQkVQWVdWMDMyUi4u&embed=true" frameborder= "0" marginwidth= "0" marginheight= "0" style={{border: "none"}} allowfullscreen webkitallowfullscreen mozallowfullscreen msallowfullscreen> </iframe>
      </main></Fade>

      <Footer/>
    </Fade>
  )
}
