//new version
import Head from 'next/head'
import styles from '../styles/Cycles.module.css'
import React, { useState, Fragment } from 'react'
import Fade from 'react-reveal/Fade';
import Footer from './src/footer.js';
import Header from './src/header.js'
const PAGE_NAME = "MUN Exec Team";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const EXECS = [
  {id: "wenny", name: "wenny wang", bio: "i am wenny."},
  {id: "martin", name: "martin wong", bio: "i am martin, the secgen."},
  {id: "zack", name: "zack sui", bio: "i am zack sui."},
]

let execsDisplay = (<Fade><main className={styles.cont}>
  <div id={styles.execs}>
  {EXECS.map((e, index) => (
    <div className={styles.exec}>
      <LazyLoadImage effect="blur" src={"execs/" + e.id + ".png"} style={{float: "left"}}/>
      <div className={styles.words}>
        <p className={styles.name}>{e.name}</p>
        <p className={styles.bio}>{e.bio}</p>
      </div>
    </div>
  ))}
  </div>
</main></Fade>)

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
        <p className={styles.heading}>more information about the THISMUN organizers will be released soon!</p>
        <div style={{padding: "250px"}}/>
      </main></Fade>

      <Footer/>
    </Fade>
  )
}
