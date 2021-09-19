import styles from '../../styles/Cycles.module.css'
import React, { useState, Fragment } from 'react'
import Fade from 'react-reveal/Fade';
import Navigation from './navigation.js';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export class Header extends React.Component {
  render() {
    return (
      <div className={styles.header}>
        <a href="/"><div className={styles.logo}><LazyLoadImage effect="blur" src="THISMUNLOGO.png"/></div></a>
        <a href="/"><div className={styles.ltext}>THIS<span id={styles.m}>MUN</span>&nbsp;II
        <div className={styles.btext}><em>Fostering Global Ethics in an Age of Post Truths</em></div></div></a>
        <Navigation/>
      </div>
    )
  }
}

module.exports = Header;
