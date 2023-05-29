import React from 'react'
import { Link } from 'react-router-dom'

function PrivacyPolicy() {
  return (
    <div className='privacy'> 
        <h1 className='privacy-header '>Privacy Policy</h1>
        <p className='privacy-para'>Please refer the following pages for the privacy policies of our respective products.</p>
        <Link to='/skryb/privacy' className='privacy-para'>Skryb AI</Link><br/><br/>
        <Link to='/countdown/privacy' className='privacy-para'>Countdown</Link><br/><br/>
        <Link to='/swimbols/privacy' className='privacy-para'>Swimbols</Link><br/><br/>
        {/* <Link to='/haafidh/privacy' className='privacy-para'>Haafidh</Link> */}
    </div>
  )
}

export default PrivacyPolicy