import Head from 'next/head'
import styles from '../styles/mun.module.css'
import q from '../styles/Q.module.css'
import React, { useState, Fragment } from 'react'
import Fade from 'react-reveal/Fade';

class HugeImage extends React.Component {
  render() {
    return (
      <div className={q.con}>
        <Head>
          <title>THISMUN 2022</title>
          <link rel="icon" href="/favicon.png" />
        </Head>

        <img className={q.image} alt={this.props.alt} src={this.props.src} lazy></img>
        <Fade>
          <div className={q.overlay}>

            <div>
              <Fade left><p className={q.massivetop}>THIS<span className={q.purple}>MUN</span> I</p></Fade>
              <Fade right><p className={q.massivemiddle}>Fostering <span className={q.lightpurple}>Global Ethics</span></p></Fade>
              <Fade left><p className={q.massivemiddle}>in an Age of <span className={q.lightpurple}>Post Truths</span></p></Fade>
              <Fade right><p className={q.massivebottom}>February <span className={q.lightpurple}>29th</span> to <span className={q.lightpurple}>30th</span> 2022</p></Fade>
            </div>

          </div>
        </Fade>

      </div>
    )
  }
}

//Conference Dropdown
const dropdownOne = [
  {title: 'Announcements', link: '/announcements'},
  {title: 'MUN Leaders', link: '/aboutus'},
  {title: 'Our School', link: '/this'},
  {title: 'Club Partners', link: '/clubs'},
];

const dropdownTwo = [
    {title: 'Invitation Letter', link: '/invite'},
    {title: 'Committees & Topics', link: '/topics'},
    {title: 'Dates & Deadlines', link: '/dates'},
    {title: 'Accomodation', link: '/housing'},
    {title: 'Transportation', link: '/transport'},
    {title: 'FAQs', link: '/faq'},
];

const dropdowns = [dropdownOne, dropdownTwo];
const headings = ["About Us", "THISMUN I"];

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.listener = null;
    this.state = {
      status: q.nav
    };
  }

  componentDidMount() {
    this.listener = document.addEventListener("scroll", e => {
      var scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 230) { //become purple over 100 pixels
        if(scrolled >= 230 && scrolled < 240) {
          this.setState({ status: q.accent5, full: false });
        } else if(scrolled >= 240 && scrolled < 250) {
          this.setState({ status: q.accent4, full: false });
        } else if (scrolled >= 250 && scrolled < 260) {
          this.setState({ status: q.accent3, full: false });
        } else if (scrolled >= 260 && scrolled < 270) {
          this.setState({ status: q.accent2, full: false });
        } else if (scrolled >= 270 && scrolled < 280) {
          this.setState({ status: q.accent1, full: false });
        } else {
          this.setState({ status: q.colorChange, full: true });
        }
      } else {
        this.setState({ status: q.nav, full: false });
      }
    });
  }

  componentDidUpdate() {
    document.removeEventListener("scroll", this.listener);
  }

  render() {
    let data = this.props.data;
    console.log(data[1]);

    return (
      <div className={this.state.status}>
        {data.map((i,index) => (
          <div className={q.dropdown}>
            <p className={q.label}>{headings[index]}</p>
            <div className={this.state.full ? q.ddcpurple : q.ddctransp}>
              {i.map(j => (
                <a href={j.link}><p>{j.title}</p></a>
              ))}
            </div>
          </div>
        ))}
      </div>
    )
  }

}

export default function Home() {
  //if mobile, redirect to mobile website
  //let isMobile = __ ? true : false;
  return (
    <div className={styles.container}>
      <NavBar data={dropdowns}/>
      <HugeImage src="BACKGROUND.jpg"/>
      <main className={styles.main}>
        <div className={q.mainLeft}>
          <Fade left cascade delay={500}><div className={q.left}>
            <h1 className={q.welchead}>Welcome to THISMUN!</h1>
            <p className={q.welcome}>Welcome letter goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Proin vitae dolor sed urna ullamcorper egestas nec tincidunt enim. Nullam sed ultrices mauris, sed aliquam eros.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lacinia risus risus, sed elementum quam rhoncus sit amet.</p>
            <p className={q.welcome}>Second paragraph. Nullam sed ultrices mauris, sed aliquam eros.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lacinia risus risus, sed elementum quam rhoncus sit amet.</p>
            <p className={q.welcome}>Third paragraph. Proin lacinia risus risus, sed elementum quam rhoncus sit amet.</p>
            <p className={q.welcome}>Fourth paragraph. Proin lacinia risus risus, sed elementum quam rhoncus sit amet.</p>
          </div></Fade>
        </div>

        <div className={q.mainRight}>
          <Fade right delay={100} cascade><center><img src="EXECS.jpeg" alt="Image of MUN execs and leaders" width="100%"/></center></Fade>
          <Fade right cascade delay={300}>
            <div className={q.right}>
              <h1 className={q.welcsubhead}>Sincerely,</h1>
              <p className={q.welcome}>Names go here. Lorem, Ipsum, Dolar, and Sit.</p>
              <p className={q.welcome}>Contact our advisor at <a href="mailto:bsumita@this.edu.cn">bsumita@this.edu.cn</a></p>
            </div>
          </Fade>
        </div>
      </main>
      <div className={styles.footerbg}>
        <Fade bottom cascade>
          <center className={styles.padcent}>
            <img src="THISMUNLOGO.png" width="100px" height="100px"/>
            <img src="SCHOOL LOGO.png" width="100px" height="100px"/>
            <p className={q.addressheading}><div className={q.linkcont}><a className={q.link} href="http://www.this.edu.cn"><span className={q.linkc} data-content="Tsinghua International School">Tsinghua International School</span></a></div></p>
            <p className={q.address}>Campus of Tsinghua High School, Beijing, China, 100084</p>
            <p className={q.address}>Contact the developer at <a href="mailto:andrew_li22@this.edu.cn?subject=[THISMUN] YOUR SUBJECT GOES HERE">andrew_li22@this.edu.cn</a></p>
          </center>
        </Fade>
      </div>
    </div>
  )
}
