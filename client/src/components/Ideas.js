import React, { useState } from 'react'

import ideasHero from '../assets/ideas/desk.jpg'
import balance from '../assets/ideas/thumbnails/balance.jpg'
import teamwork from '../assets/ideas/thumbnails/teamwork.jpg'
import productivity from '../assets/ideas/thumbnails/productivity.jpg'

import Default from './common/IdeaSection/Default.js'
import Balance from './common/IdeaSection/Balance.js'
import Teamwork from './common/IdeaSection/Teamwork.js'
import Productivity from './common/IdeaSection/Productivity.js'
import InfoTwo from './common/IdeaSection/InfoTwo.js'

const Ideas = () => {

  const styles = {
    container: {
      backgroundImage: `url(${ideasHero})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      width: '100vw',
      height: '80vh',
    },
    text: {
      width: '50%',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      background: '#FFF',
      borderRadius: '5px',
      padding: '15px',
    },
    thumbnail: {
      width: '10vw',
      borderRadius: '5px',
      margin: '0vw 0.5vw 0vw 0.5vw',
    },
    imageSpan: {
      left: '50%',
      top: '96%',
      transform: 'translate(-50%, -20%)',
      width: '34vw',
      position: 'relative',
      paddingTop: '1vw',
      zIndex: '1',
      borderRadius: '0.5rem',
      background: '#FFF',
    },
    thumbnailPara: {
      paddingLeft: '0.5vw',
    },
    body: {
      marginTop: '20vh',
    },
    background: {
      background: '#F5F5F5',
      paddingTop: '5vh',
      paddingBottom: '2vh',
    },
  }

  const [mainText, setMainText] = useState(<Default />)


  const goToBalance = () => {
    setMainText(<Balance />)
  }

  const goToTeamwork = () => {
    setMainText(<Teamwork />)
  }

  const goToProductivity = () => {
    setMainText(<Productivity />)
  }


  return (
    <>
      <div style={styles.container}>
        <div style={styles.text}>
          <h1 className="fs-5">Ideas for the 21<sup>st</sup> Century Dev</h1>
          <p>Is it time to think outside the div?</p>
        </div>
        <div className="d-flex justify-content-center" style={styles.imageSpan}>
          <div onClick={goToBalance}>
            <img src={balance} style={styles.thumbnail} alt="..." />
            <p style={styles.thumbnailPara}>Balance</p>
          </div>
          <div onClick={goToTeamwork}>
            <img src={teamwork} style={styles.thumbnail} alt="..." />
            <p style={styles.thumbnailPara}>Teamwork</p>
          </div>
          <div onClick={goToProductivity}>
            <img src={productivity} style={styles.thumbnail} alt="..." />
            <p style={styles.thumbnailPara}>Productivity</p>
          </div>
        </div>
      </div>
      <div className="container">
        <p style={styles.body}>
          {mainText}
        </p>
      </div>
      <div style={styles.background}>
        <div className="container">
          <InfoTwo />
        </div>
      </div>
    </>
  )
}

export default Ideas