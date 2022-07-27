import React from 'react'
import image from '../../assets/images/homeTitleImage.png'

function HomeTitle() {
  return (
    <section className='home-Title'>
        <div className='home-Title_Content'>
            <h1>SkyDevz</h1>
            <p>Home to <span>intriguing apps</span> built for the Apple platforms.</p>
            <a href='#footer' className='home-Title_ContentLink'><button>Get in touch</button></a>
        </div>
        <img src={image} className='home-Title_image' alt='homeTitle_pic' />
    </section>
  )
}

export default HomeTitle