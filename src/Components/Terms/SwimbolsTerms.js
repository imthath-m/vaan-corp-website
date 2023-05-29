import React from 'react';

function SwimbolsTerms() {
  return (
    <div className='privacy'>
        
        <h1 className='termsOfUse-header'>Terms of Use</h1>
        
        <h2 className='privacy-sec_header'>Free Features</h2>
        <p className='privacy-para'>
          Swimbols App provides a free version with basic features that allow you to browse and explore all the SF Symbols available. You can design and customize symbols using SwiftUI modifiers without any cost.
        </p>

        <h2 className='privacy-sec_header'>Premium Subscription</h2>
        <p className='privacy-para'>
          To access advanced features, such as the ability to copy the final code of your designed symbols, you can subscribe to our premium subscription. The premium subscription offers the following benefits:
          <br/>
          <br/>
        <ul>
          <li>Unlock the option to copy the final code of your designed symbols.</li>
          <li>Access to exclusive advanced SwiftUI modifiers and customization options.</li>
          <li>Prioritized customer support for any app-related inquiries.</li>
        </ul>
        <br/>
          The premium subscription can be purchased through a monthly or yearly subscription, or you can opt for a one-time purchase. The subscription automatically renews at the end of each billing period, and you can cancel it at any time.
        </p>
    </div>
  );
}

export default SwimbolsTerms;