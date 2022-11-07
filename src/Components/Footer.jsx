import React, { useState } from 'react'
import twitter from "../assets/images/twitter.svg"
import toast, { Toaster } from 'react-hot-toast';

function Footer() {
  const [first, setFirst] = useState('');
 
  const handleSubmit = event => {
    // const notify = () => toast("Wow so easy!");
    // nnotify()
    // function nnotify() {
    //  const notify = () => toast("Wow so easy!");
    // }
    event.preventDefault();
    const data = {
      "email": first,
      "source" : "vaanCorp",
      "platform" : navigator.platform
  }
  fetch('https://email-collector-10.herokuapp.com/api/v1/emails/create', {
      method: 'POST', 
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
      })
      .then(response => response.json())
      .then(data => {
      console.log('Success:', data);
      
      })
      .catch((error) => {
      console.error('Error:', error);
     
  });
    console.log('form submitted ✅');
    // 👇️ clear input field values
    setFirst('');
    // window.location.reload()
  }
  return (
    <footer className='footer' id='footer'>
      <div className='footer_heading'>
        <h1 className='footer_heading-h'>Subscribe to our newsletter</h1>
        <p className='footer_heading-p'>Get latest news and update</p>
      </div>
      <form className='footer_form' onSubmit={handleSubmit}>
        <input className='footer_form-input' placeholder='Enter your email' type="text"
          value={first}
          onChange={event => setFirst(event.target.value)}
          required></input>
        <button type='submit' className='footer_form-button'>Submit</button>
      </form>
      <span className='footer-copyrights'>
        <a href='https://twitter.com/skydevz' target="_blank"><img className='footer-copyrights_img' alt='footer_twit_pic' src={twitter} /></a>
         © {new Date().getFullYear()}, Vaan Corporation. All Rights Reserved.</span>
    </footer>
  )
}

export default Footer