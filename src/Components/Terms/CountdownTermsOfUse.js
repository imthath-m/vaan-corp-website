import React from 'react';

function CountdownTerms() {
  return (
    <div className='privacy'>
        
        <h1 className='termsOfUse-header'>Terms of Use</h1>
        
        <h2 className='privacy-sec_header'>Free Features</h2>
        <p className='privacy-para'>
          Countdown App provides a free version with basic features that allow you to fetch events from your calendar and view countdowns for them. These features are available to all users at no cost.
        </p>

        <h2 className='privacy-sec_header'>Premium Subscription</h2>
        <p className='privacy-para'>
          You can enhance your Countdown App experience by subscribing to our premium features. The premium subscription offers the following benefits:<br/>
          <br/><ul>
            <li>Access to a wider range of event widgets and customization options.</li>
            <li>Ability to mark events as favorites and view countdowns specifically for those events.</li>
          </ul>
          <br/>
          The premium subscription can be purchased either through a yearly subscription or a one-time purchase. The yearly subscription automatically renews at the end of each billing period, and you can cancel it at any time.
        </p>
        <p className='privacy-para'>
          
        </p>
    </div>
  );
}

export default CountdownTerms;