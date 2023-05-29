import React from 'react'
import { Link } from 'react-router-dom'

function TermsOfService() {
  return (
    <div className='privacy'> 
        <h1 className='privacy-header '>Terms of Service</h1>
        <p className='privacy-para'>Please refer the following pages for the terms of service for each of our products.</p>
        <Link to='/skryb/terms' className='privacy-para'>Skryb AI</Link><br/><br/>
        <Link to='/countdown/terms' className='privacy-para'>Countdown</Link><br/><br/>
        <Link to='/swimbols/terms' className='privacy-para'>Swimbols</Link><br/><br/>
        <Link to='/haafidh/terms' className='privacy-para'>Haafidh</Link>
    </div>
  )
}

export default TermsOfService