
import { useSelector } from 'react-redux';
import {  Route, Routes } from 'react-router-dom';
import './App.scss';
import BlogsContainer from './Components/Blogs/BlogsContainer';
import BlogFullPage from './Components/Blogs/BlogFullPage';
import Footer from './Components/Footer';
import Header from './Components/Header';
import HomeContainer from './Components/Home/HomeContainer';
import CountDownPrivacyPolicy from './Components/Privacy/CoutDownPrivacyPolicy';
import SwimbolsPrivacyPolicy from './Components/Privacy/SwimbolsPrivacyPolicy';
import HaafidhPrivacyPolicy from './Components/Privacy/HaafidhPrivacyPolicy';
import SkrybPrivacyPolicy from './Components/Privacy/SkrybPrivacyPolicy';
import GoogleSiteVerification from './Components/GoogleSiteVerification';
import VerifyForZoho from './Components/VerifyForZoho';

function App() {
  const home = useSelector(state => state.mainState.home)
  const path = window.location.pathname.includes("html")
  return (
    <>
        {!path && <Header/>}
        <Routes>
          <Route path='/' element={<HomeContainer />} />
          <Route path='/google085d3f953fe97354.html' element={<GoogleSiteVerification />} />
          <Route path='/verifyforzoho.html' element={<VerifyForZoho />} />
          {/* <Route path='/blog' element={<BlogsContainer />} />
          <Route path='/blogFull/:id' element={<BlogFullPage />} /> */}
          <Route path='/privacy/countdown' element={<CountDownPrivacyPolicy />} />
          <Route path='/privacy/swimbols' element={<SwimbolsPrivacyPolicy />} />
          <Route path='/privacy/haafidh' element={<HaafidhPrivacyPolicy />} />
          <Route path='/privacy/skryb' element={<SkrybPrivacyPolicy />} />
        </Routes>
        {!path && <Footer/> }
      </>
  );
}

export default App;
