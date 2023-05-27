
// import { useSelector } from 'react-redux';
import {  Route, Routes } from 'react-router-dom';
import './App.scss';
// import BlogsContainer from './Components/Blogs/BlogsContainer';
// import BlogFullPage from './Components/Blogs/BlogFullPage';
import Footer from './Components/Footer';
import Header from './Components/Header';
import HomeContainer from './Components/Home/HomeContainer';
import CountDownPrivacyPolicy from './Components/Privacy/CoutDownPrivacyPolicy';
import SwimbolsPrivacyPolicy from './Components/Privacy/SwimbolsPrivacyPolicy';
import HaafidhPrivacyPolicy from './Components/Privacy/HaafidhPrivacyPolicy';
import SkrybPrivacyPolicy from './Components/Privacy/SkrybPrivacyPolicy';
import GoogleSiteVerification from './Components/GoogleVerify/GoogleSiteVerification';
import VerifyForZoho from './Components/ZohoVerify/VerifyForZoho';
import SkrybTermsOfUse from './Components/Terms/SkrybTermsOfUse';
import Support from './Components/Info/Support';
import TermsOfService from './Components/Info/TermsOfService';
import PrivacyPolicy from './Components/Info/PrivacyPolicy';
import Cancellation from './Components/Info/Cancellation';

function App() {
  // const home = useSelector(state => state.mainState.home)
  const path = window.location.pathname.includes("html")
  return (
    <>
      {!path && <Header/>}
      <Routes>
        <Route path='/' element={<HomeContainer />} />
        <Route path='/google085d3f953fe97354.html' element={<GoogleSiteVerification />} />
        <Route path='/zohoverify/verifyforzoho.html' element={<VerifyForZoho />} />
        {/* <Route path='/blog' element={<BlogsContainer />} />
        <Route path='/blogFull/:id' element={<BlogFullPage />} /> */}
        <Route path='/countdown/privacy-policy' element={<CountDownPrivacyPolicy />} />
        <Route path='/swimbols/privacy-policy' element={<SwimbolsPrivacyPolicy />} />
        <Route path='/haafidh/privacy-policy' element={<HaafidhPrivacyPolicy />} />
        <Route path='/skryb-ai/privacy-policy' element={<SkrybPrivacyPolicy />} />
        <Route path='/skryb-ai/terms-of-use' element={<SkrybTermsOfUse />} />
        <Route path='/support' element={<Support/>}/>
        <Route path='/terms-of-service' element={<TermsOfService/>}/>
        <Route path='/privacy-policy' element={<PrivacyPolicy/>}/>
        <Route path='/cancellation' element={<Cancellation/>}/>
      </Routes>
      {!path && <Footer/> }
    </>
  );
}

export default App;
