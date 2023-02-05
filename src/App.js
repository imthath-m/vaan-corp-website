
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

function App() {
  const home = useSelector(state => state.mainState.home)
  const pathname = window.location.pathname.toLowerCase().includes("/privacy")
  return (
    <>
      {/* {location && <Header />} */}
        {pathname ? "" : <Header />}
        <Routes>
          <Route path='/' element={<HomeContainer />} />
          {/* <Route path='/blog' element={<BlogsContainer />} />
          <Route path='/blogFull/:id' element={<BlogFullPage />} /> */}
          <Route path='/privacy/countdown' element={<CountDownPrivacyPolicy />} />
          <Route path='/privacy/swimbols' element={<SwimbolsPrivacyPolicy />} />
          <Route path='/privacy/haafidh' element={<HaafidhPrivacyPolicy />} />
        </Routes>
        {pathname ? "" : <Footer/>}
      </>
  );
}

export default App;
