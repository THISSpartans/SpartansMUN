import Head from 'next/head'
import styles from '../styles/mun.module.css'
import React from 'react'

class NavigationBar extends React.Component {
  render() {
    return (
      <div class={styles.bar}>
        <div class={styles.dropdown}>
          <span>THISMUN 2022</span>
          <div class={styles.dropdowncontent}>
            <p><a href="/invite">Invitation Letter</a></p>
            <p><a href="/announcements">Announcements</a></p>
            <p><a href="/aboutus">Our Team</a></p>
            <p><a href="/topics">Committees & Topics</a></p>
            <p><a href="/dates">Dates & Deadlines</a></p>
            <p><a href="/housing">Accomodation</a></p>
            <p><a href="/transport">Transportation</a></p>
            <p><a href="/faq">FAQ</a></p>
          </div>
        </div>

        <div class={styles.dropdown}>
          <span><a href="/signup">Register!</a></span>
        </div>
      </div>
    )
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <center><img className={styles.dlogo} src="THISMUNLOGO.png" width="200px" height="200px"></img>
        <h1 className={styles.massive}>THIS<span className={styles.accent1}>MUN</span></h1></center>
      </div>
    )
  }
}

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>THISMUN 2022</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div id="top">
          <Header/>
      </div>
      <NavigationBar/>
      <main className={styles.main}>
          <p className={styles.welcome}>You can NOT live on campus.</p>
      </main>
      <div className={styles.footerbg}>
        <center className={styles.padcent}>
          <img src="THISMUNLOGO.png" width="100px" height="100px"/>
          <img src="SCHOOL LOGO.png" width="100px" height="100px"/>
          <p className={styles.addressheading}><a href="http://www.this.edu.cn">Tsinghua International School</a></p>
          <p className={styles.address}>Campus of Tsinghua High School, Beijing, China, 100084</p>
        </center>
      </div>
    </div>
  )
}
