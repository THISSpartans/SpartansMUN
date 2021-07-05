//new version
import Head from 'next/head'
import styles from '../styles/Cycles.module.css'
import React, { useState, Fragment } from 'react'
import Fade from 'react-reveal/Fade';
import Footer from './src/footer.js';
import Header from './src/header.js'
const PAGE_NAME = "Committees & Topics";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

class CommitteeClass {
  constructor(name, topicA, topicB, chair, cochair) {
    this.name=name;
    this.topicA=topicA;
    this.topicB=topicB;
    this.chair=chair;
    this.cochair=cochair;
  }
}

class ChairClass {
  constructor(name, email) {
    this.name=name;
    this.email=email;
  }
}

const COMLIST = [
new CommitteeClass("UNESCO", "Era of Inequality led by Increasing Socioeconomic Gaps in Education", "Impact of Different Levels of Education on Employment", new ChairClass("Wenny Wang", "weining_wang23@this.edu.cn"), new ChairClass("Ken He")),

new CommitteeClass("UNODC", "Policing the Injustice in Police Brutality", "Combatting Trafficking in Persons and Smuggling of Migrants", new ChairClass("Charlotte Wang", "charlotte_wang23@this.edu.cn"), new ChairClass("William Shan")),

new CommitteeClass("UNEP", "Balancing Arctic Shipping and Environmental Protections", "Arctic Biodiversity Protection", new ChairClass("Jiangshan Gao", "jiangshan_gao22@this.edu.cn"), new ChairClass("Andrew Li", "andrew_li22@this.edu.cn")),

new CommitteeClass("WHO", "Development of Tobacco Control within States", "Control and Prevention of AIDS", new ChairClass("Jane Ma", "yongyi_ma22@this.edu.cn"), new ChairClass("Zack Sui", "zack_sui23@this.edu.cn"))

]

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
        <p className={styles.heading}>topics and committees</p>
        <p>The THISMUN conference will have four committees, each with two topics. Below you can find the committees you would like to participate in, and if you'd like, contact your chairs.</p>
        {COMLIST.map(i => (
          <div className={styles.committee}>
            <LazyLoadImage effect="blur" src={i.name + ".png"}/>
            <div className={styles.words}>
              <p className={styles.comhead}>{i.name}</p>
              <p className={styles.comtopic}>Topic A: <span className={styles.comchname}>{i.topicA}</span></p>
              <p className={styles.comtopic}>Topic B: <span className={styles.comchname}>{i.topicB}</span></p>
              <p className={styles.comch}>Chair: <a className={styles.comchname} href={"mailto:" + i.chair.email}>{i.chair.name}</a></p>
              <p className={styles.comch}>Cochair: <a className={styles.comchname} href={"mailto:" + i.cochair.email}>{i.cochair.name}</a></p>
            </div>
          </div>
        ))}
      </main></Fade>

      <Footer/>
    </Fade>
  )
}
