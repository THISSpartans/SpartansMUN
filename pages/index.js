import Head from 'next/head'
import styles from '../styles/mun.module.css'
import React from 'react'

class HugeImage extends React.Component {
  render() {
    return (
      <img className={styles.image} alt={this.props.alt} src={this.props.src} width="100%" height="100%"/>
    )
  }
}

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

class Bar extends React.Component {
  render() {
    return (
      <div class={styles.bar}>&nbsp;</div>
    )
  }
}

export default function Home() {
  let dataSource = [];
  return (
    <div className={styles.container}>
      <Head>
        <title>THISMUN 2022</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div id="top">
          <HugeImage src="BACKGROUND.png"/>
      </div>
      <NavigationBar/>
      <main className={styles.main}>
          <img src="EXECS.jpeg" alt="Image of execs/leaders/idk"/>
          <h1 className={styles.welchead}>Welcome to THISMUN!</h1>
          <p className={styles.welcome}>Welcome letter goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae dolor sed urna ullamcorper egestas nec tincidunt enim. Nullam sed ultrices mauris, sed aliquam eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lacinia risus risus, sed elementum quam rhoncus sit amet. Praesent vel dignissim metus. Sed ante ex, volutpat ac rutrum vel, dapibus ac nisi. Donec vel mauris et mi venenatis accumsan. Maecenas ultrices dui at varius condimentum. Proin euismod ullamcorper porta. Nulla facilisi. Aenean in sem pulvinar eros facilisis fringilla. In ac lectus rhoncus, porta diam quis, congue tortor. Duis tincidunt ornare augue, sollicitudin semper augue malesuada ut. Morbi id porta metus. Curabitur at ipsum congue, congue elit eu, consequat est. Etiam euismod imperdiet urna, non scelerisque odio sagittis sit amet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam ornare tortor id euismod lacinia.</p>
          <h1 className={styles.welcsubhead}>Sincerely,</h1>
          <p className={styles.welcome}>Names go here. Lorem, Ipsum, Dolar, and Sit.</p>
          <p className={styles.welcome}>Contact our advisor at <a href="mailto:bsumita@this.edu.cn">bsumita@this.edu.cn</a></p>
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
