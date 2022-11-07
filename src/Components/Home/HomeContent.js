import React from 'react'
import image from '../../assets/images/What_we_do.png'

function HomeContent() {
  return (
    <section className='home_Content'>
      <img src={image} alt='home_Content_pic' className='home_Content-image'/>
      <div className='home_Content-para'>
        <h2 className='home_Content-para-heading1'>What we do?</h2>
        <h3 className='home_Content-para-heading2'>Building technology from the ground up</h3>
        <p className='home_Content-para-content'><b>VAAN</b> is well known to craft the most innovative & eye catchy mobile apps & websites.
           We offer a wide range of customized services in mobile apps, website development, 
           AR-VR Development, Game Development and much more. We believe in delivering the services 
           without compromising on time and quality.
        </p>
      </div>
    </section>
  )
}

export default HomeContent