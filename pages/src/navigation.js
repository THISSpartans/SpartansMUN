import styles from '../../styles/Cycles.module.css'
import React, { useState, Fragment } from 'react'
import Fade from 'react-reveal/Fade';

export class Navigation extends React.Component {
  render() {
    const dropdownOne = [
      {title: 'MUN Exec Team', link: '/aboutus'},
      {title: 'Our School', link: '/this'}
    ];

    const dropdownThree = [
      {title: 'Invitation Letter', link: '/invite'},
      {title: 'Committees & Topics', link: '/topics'},
      {title: 'Dates & Deadlines', link: '/dates'},
      {title: 'Schedule', link: '/schedule'}
    ];

    const dropdownTwo = [
        {title: 'Accomodation', link: '/housing'},
        {title: 'Transportation', link: '/transport'},
    ];
    let data = [[dropdownOne, dropdownThree], ["About Us", "THISMUN I"]];

    return (
      <Fade>
        <div className={styles.navbar}>
          {data[0].map((i,index) => (
            <div className={styles.nav}>
              <p>{data[1][index]}</p>
              <div className={styles.content}>
                {i.map(j => (
                  <a href={j.link}><p className={styles.sel}>{j.title}</p></a>
                ))}
              </div>
            </div>
          ))}

          <div className={styles.nav}>
            <a id={styles.reg} href="/register"><p>Register</p></a>
          </div>
        </div>
      </Fade>
    )
  }
}

module.exports = Navigation;
