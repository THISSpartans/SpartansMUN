//new version
import Head from 'next/head'
import styles from '../styles/Cycles.module.css'
import React, { useState, Fragment } from 'react'
import Fade from 'react-reveal/Fade';
import Footer from './src/footer.js';
import Header from './src/header.js';
const PAGE_NAME = "Dates & Deadlines";

const DATES = [ //MUST BE SORTED. PLEASE.
  {date: new Date('September 25, 2021'), desc: "Early registration deadline. The fee before this date is ¥550!"},
  {date: new Date('December 25, 2021'), desc: "final registration deadline. The fee before this date is ¥700!"},
  {date: new Date('March 18, 2022'), desc: "THISMUN conference begins"},
  {date: new Date('March 20, 2022'), desc: "THISMUN conference ends"},
];

class D extends React.Component {
  render() {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let date = this.props.date;
    let dateFormatted = `${months[date.getMonth()]} ${date.getDate()}, ${date.getYear()+1900}`
    return (
      <div className={styles.announcement}>
        <span className={styles.heading}><span className={styles.datecontent}>&nbsp;{dateFormatted}<span className={styles.desc}> – {this.props.body}</span></span></span>
      </div>
    )
  }
}

export default function Home() {
  //only change stuff in the MAIN tag
  //sort dates

  return (
    <Fade cascade>
      <Head>
        <title>THISMUN – {PAGE_NAME}</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Header/>

      <Fade><main className={styles.cont}>
        <p>Below is a timeline of the dates and deadlines for the THISMUN I conference. All times are in China standard time, UTC+8.</p>
        {DATES.map(j => (
          <D date={j.date} body={j.desc}/>
        ))}

        <div style={{padding: "120px"}}/>
      </main></Fade>

      <Footer/>
    </Fade>
  )
}
