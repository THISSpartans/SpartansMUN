import styles from '../../styles/Cycles.module.css'
import React, { useState, Fragment } from 'react'
import Fade from 'react-reveal/Fade';
import Navigation from './navigation.js'

export class Header extends React.Component {
  render() {
    return (
      <div className={styles.header}>
        <a href="/"><div className={styles.logo}><img src="THISMUNLOGO.png"/></div></a>
        <a href="/"><div className={styles.ltext}>THIS<span id={styles.m}>MUN</span>&nbsp;I
        <div className={styles.btext}><em>Fostering Global Ethics in an Age of Post Truths</em></div></div></a>
        <Navigation/>
      </div>
    )
  }
}

module.exports = Header;
