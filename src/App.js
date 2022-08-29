
import { useSelector } from 'react-redux';
import {  Route, Routes } from 'react-router-dom';
import './App.scss';
import BlogsContainer from './Components/Blogs/BlogsContainer';
import Footer from './Components/Footer';
import Header from './Components/Header';
import HomeContainer from './Components/Home/HomeContainer';

function App() {
  const home = useSelector(state => state.mainState.home)
  return (
      <Routes>
        <Route path='/' element={
          <>
            <Header/>
            <HomeContainer />
            <Footer/>
          </>
        } />
        <Route path='blog' element={
          <> 
            <Header/>
            <BlogsContainer />
            <Footer/>
          </> 
        } />
      </Routes>
  );
}

export default App;
