import styles from '../../styles/Cycles.module.css'
import React, { useState, Fragment } from 'react'
import Fade from 'react-reveal/Fade';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export class Footer extends React.Component {
  render() {
    return (
      <Fade><div className={styles.footer}>
        <div id={styles.logos}>
          <a href="https://www.thismun.com"><LazyLoadImage effect="blur" src="THISMUNLOGO.png" width="100px" height="100px"/></a>
          <a href="http://www.this.edu.cn"><LazyLoadImage effect="blur" src="SCHOOL LOGO.png" width="100px" height="100px"/></a>
        </div>
        <div className={styles.item}><a href="http://www.this.edu.cn"><span id={styles.school}>Tsinghua International School</span></a></div>
        <div className={styles.item}>Campus of Tsinghua High School, Beijing, China, 100084</div>
        <div className={styles.item}>Contact our advisor at <a href="mailto:bsumita@this.edu.cn">bsumita@this.edu.cn</a></div>
      </div></Fade>
    )
  }
}

module.exports = Footer;
