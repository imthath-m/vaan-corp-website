import React from 'react'
import image1 from '../../assets/images/Swimbols_image.png'
import image2 from '../../assets/images/Haafidh_image.png'
import swimbols from '../../assets/images/Swimbols_icon.png'
import haafidh from '../../assets/images/Haafidh_icon.png'
import countDownIcon from '../../assets/images/Countdown_icon.png'
import countDown from '../../assets/images/Countdown_image.png'
import { haafidhPage } from '../../helper'
import { swimbolsPage } from '../../helper'
import { countdownPage } from '../../helper'

function HomeProducts() {
  return (
    <section className='home_Products' id='home_Products'>
      <h1 className='home_Products-heading'>Products</h1>
      <div className='home_Products-cards'>
        <figcaption className='home_Products-card' onClick={()=> {swimbolsPage()}}>
          <img alt='' src={image1} className='home_Products-card_image'/>
          <div className='home_Products-card_title'>
            <img alt='' src={swimbols} className='home_Products-card_titleImg'/>
            <h3 className='home_Products-card_titleHeading'>Swimbols</h3>
          </div>
          <p className='home_Products-card_titlePara'>Swimbols provides a swifty way to work with SF Symbols. Do the searching, designing
            and then changing symbols all in one place, and take your code with you.
          </p>
        </figcaption>
        <figcaption className='home_Products-card' onClick={()=> {haafidhPage()}}>
          <img alt='' src={image2} className='home_Products-card_image'/>
          <div className='home_Products-card_title'>
            <img alt='' src={haafidh} className='home_Products-card_titleImg'/>
            <h3 className='home_Products-card_titleHeading'>Haafidh</h3>
          </div>
          <p className='home_Products-card_titlePara'>Haafidh helps you keep track of the passages in Quran you have memorized and reminds you
            to revise them at specific spaced intervals. Please don’t expect this to be yet another
            Quran app
          </p>
        </figcaption>
        <figcaption className='home_Products-card' onClick={()=> {countdownPage()}}>
          <img alt='' src={countDown} className='home_Products-card_image'/>
          <div className='home_Products-card_title'>
            <img alt='' src={countDownIcon} className='home_Products-card_titleImg'/>
            <h3 className='home_Products-card_titleHeading'>Countdown</h3>
          </div>
          <p className='home_Products-card_titlePara'>We don't want you to start a Countdown app with an 
            empty page. Just install the app and see Countdown for all your Calendar events.
          </p>
        </figcaption>
      </div>
    </section>
  )
}

export default HomeProducts