import React from 'react'

function SwimbolsPrivacyPolicy() {
  return (
    <div className='privacy'>
        
        <h1 className='privacy-header '>Privacy Policy</h1>
        <p className='privacy-para'>
            This privacy policy governs your use of the software application Swimbols (“Application”) for Apple devices
            (Mac, iPhone and iPad) that was created by Mohammed Imthathullah M("Developer"). The Application lets
            you browse through SF Symbols, select and modify them. Once you are happy with the design, you can copy
            the generated code directly to your SwiftUI or UIKit project.
        </p>
   
        <h2 className='privacy-sec_header'>No Data Collection</h2>
        <p className='privacy-para'>
            The Application does not collect any information from you. Internet connection is not required to use this application.
        </p>

        <h2 className='privacy-sec_header'>Data Source</h2>
        <p className='privacy-para'>
            The symbols displayed in this application are the same provided by Apple via the SF Symbols app. The application lets you
            browse, select and design the symbols with SwiftUI modifers.
        </p>

        <h2 className='privacy-sec_header'>Changes to This Privacy Policy</h2>
        <p className='privacy-para'>
            The developer may update this Privacy Policy from time to time. Thus, you are advised to review this page periodically for 
            any changes. The developer will notify you of any changes by posting the new Privacy Policy on this page. These changes are effective immediately, after 
            they are posted on this page.
        </p>

        <h2 className='privacy-sec_header'>Contact</h2>
        <p className='privacy-para'>
            If you have any questions or suggestions about this Privacy Policy, kindly send an email to <a href = "mailto: imthath.m@hotmail.com" className='privacy-mail'>imthath.m@hotmail.com</a> with the subject line "Swimbols App Privacy Policy".
        </p>
    </div>
  )
}

export default SwimbolsPrivacyPolicy