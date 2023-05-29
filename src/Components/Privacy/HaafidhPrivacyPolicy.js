import React from 'react'

function HaafidhPrivacyPolicy() {
  return (
    <div className='privacy'>
        
        <h1 className='privacy-header '>Privacy Policy</h1>
        <p className='privacy-para'>
            This privacy policy governs your use of the software application Haafidh (“Application”) for Apple devices
            (Mac, iPhone and iPad) that was created by Mohammed Imthathullah M("Developer"). The Application helps you keep 
            track of the passages in Quran you have memorized and reminds you to revise them at specific spaced intervals.
        </p>
   
        <h2 className='privacy-sec_header'>No Data Collection</h2>
        <p className='privacy-para'>
            The Application does not collect any information from you. Internet connection is used only to playing recitations.
        </p>

        <h2 className='privacy-sec_header'>Data Source</h2>
        <p className='privacy-para'>
            Quran text is bundled with the binary. The audio is fetched on demand from the open source <a href = "https://alquran.cloud/" className='privacy-mail'>Al Quran Cloud</a>.
        </p>

        <h2 className='privacy-sec_header'>Changes to This Privacy Policy</h2>
        <p className='privacy-para'>
            The developer may update this Privacy Policy from time to time. Thus, you are advised to review this page periodically
            for any changes. The developer will notify you of any changes by posting the new Privacy Policy on this page. These changes are
            effective immediately, after they are posted on this page.
        </p>

        <h2 className='privacy-sec_header'>Contact</h2>
        <p className='privacy-para'>
            If you have any questions or suggestions about this Privacy Policy, kindly send an email to <a href = "mailto: contact@vaancorp.com" className='privacy-mail'>contact@vaancorp.com</a> with the
            subject line "Haafidh - Privacy Policy".
        </p>
    </div>
  )
}

export default HaafidhPrivacyPolicy