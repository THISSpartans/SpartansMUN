//new version
import Head from 'next/head'
import styles from '../styles/Cycles.module.css'
import React, { useState, Fragment } from 'react'
import Fade from 'react-reveal/Fade';
import Footer from './src/footer.js';
import Header from './src/header.js'
const PAGE_NAME = "Our School";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

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
        <LazyLoadImage effect="blur" src="school.jpg"/>
        <p className={styles.heading}>about our school</p>
        <p>Tsinghua International School (THIS) is affiliated with Tsinghua University High School. THIS has assembled a team of highly qualified teachers from around the world and aims to provide an education that merges Western educational standards with Eastern cultural perspectives. Hence, Tsinghua International School fosters creative critical thinkers who are rooted in China and prepared to lead in the global community. THIS is a community of joyful learners – students, families, teachers, and staff members – founded on, committed to, and united by our five core values: collaboration, engagement, discovery, cultural diversity, and the Tsinghua Spirit.</p>
      </main></Fade>

      <Footer/>
    </Fade>
  )
}
