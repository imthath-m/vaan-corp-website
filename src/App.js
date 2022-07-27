
import { useSelector } from 'react-redux';
import './App.scss';
import BlogsContainer from './Components/Blogs/BlogsContainer';
import Footer from './Components/Footer';
import Header from './Components/Header';
import HomeContainer from './Components/Home/HomeContainer';

function App() {
  const home = useSelector(state => state.mainState.home)
  return (
    <>
      <Header/>
      {home?<HomeContainer/>:<BlogsContainer/>}
      <Footer/>
    </>
  );
}

export default App;
