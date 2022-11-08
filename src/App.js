
import { useSelector } from 'react-redux';
import {  Route, Routes } from 'react-router-dom';
import './App.scss';
import BlogsContainer from './Components/Blogs/BlogsContainer';
import BlogFullPage from './Components/Blogs/BlogFullPage';
import Footer from './Components/Footer';
import Header from './Components/Header';
import HomeContainer from './Components/Home/HomeContainer';

function App() {
  const home = useSelector(state => state.mainState.home)
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<HomeContainer />} />
        <Route path='/blog' element={<BlogsContainer />} />
        <Route path='/blogFull/:id' element={<BlogFullPage />} />
      </Routes>
      {/* <Footer/> */}
      </>
  );
}

export default App;
