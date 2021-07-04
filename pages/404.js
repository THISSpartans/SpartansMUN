import Head from 'next/head';
import React, { useState, Fragment } from 'react';
import Fade from 'react-reveal/Fade';
import styles from '../styles/Cycles.module.css';
//replace the database with firebase...eventually

export default function Home() {
  return (
    <div>
        <Head>
          <title>THISMUN – 404!</title>
          <link rel="icon" href="/favicon.png" />
        </Head>

        <a href="/"><Fade><div className={styles.four}>
          <span>4</span>
          <span>0</span>
          <span>4</span>
          <span>!</span>
          <p>Click to go back to safety...</p>
        </div></Fade></a>
    </div>
  )
}
