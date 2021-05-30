import Head from 'next/head'
import styles from '../styles/mun.module.css'
import React from 'react'
import PreloadImage from 'react-preload-image'
import ScrollAnimation from 'react-animate-on-scroll'
import animate from 'animate.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <div class="animate__animated animate__fadeInLeft animate__fadeOutLeft animate__delay-2s">
        <h1>Welcome to</h1>
      </div>
      <div class="animate__animated animate__fadeInRight animate__fadeOutRight animate__delay-2s">
        <h1>THISMUN</h1>
      </div>
    </div>
  )
}
