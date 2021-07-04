//new version
import Head from 'next/head'
import styles from '../styles/Cycles.module.css'
import React, { useState, Fragment } from 'react'
import Fade from 'react-reveal/Fade';
import Header from './src/Header.js';
import Footer from './src/Footer.js';

const NAMES = [
  "Ms. Benita Sumita",
  "Jiangshan Gao",
  "Jane Ma",
  "William Shan",
  "Zack Sui",
  "Charlotte Wang",
  "Wenny Wang",
  "Martin Wong"
]

export default function Home() {
  //only change stuff in the MAIN tag
  return (
    <Fade cascade>
      <Head>
        <title>THISMUN</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Header/>

      <main>
        <div className={styles.bimg}>
          <img src="BACKGROUND.jpg"/>
        </div>

        <Fade cascade><div className={styles.cont}>
          <div className={styles.box} id={styles.A1}>
            <img src="EXECS.jpeg"/>
            <p className={styles.heading}>welcome to THIS MUN!</p>
            <p>Welcome to the official website of THISMUN I! Here at Tsinghua International School, our core values are collaboration, discovery, engagement, cultural diversity, and Tsinghua Spirit. These are all values we emphasize in our Model United Nations club. THIS MUN is now hosting our first ever interschool conference in March 2022 on the theme, Fostering Global Ethics in an Age of Post Truths.</p>
            <p>What is an age of post truths? In short, it is a time where facts and evidence are being obscured to deceive. Granted, there have always been ridiculous lies told by global leaders, but recent dishonesty on all sorts of platforms–radio and television and social media and many others–have catalysed conflict. The people affected are no longer in one small community; the people affected are scattered all around the world. Conflict is now accessible at the press of a button, often one that says “Tweet”. It’s time for us to clarify the facts.</p>
            <p>THISMUN I will be hosted at a to be decided location between March 18th and March 20th, 2022.</p>
            <p>If you have any additional questions, check out the <a href="/faq">FAQ page</a>, and if your question still isn't answered, contact us at <a className={styles.link} href="mailto:contact@thismun.com">contact@thismun.com</a>. We hope to see you at the first THISMUN!</p>
            <p className={styles.heading2}>sincerely,</p>
            <div className={styles.nameList}>{NAMES.map(j => (
              <div className={styles.NAME}>{j}</div>
            ))}</div>
          </div>
        </div></Fade>
      </main>

      <Footer/>
    </Fade>
  )
}
