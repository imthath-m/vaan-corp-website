import React from 'react'
// import useRef from 'react'
// import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import logo from "../assets/images/Skydevz_brown_logo.svg"
// import { setHome } from '../redux/reducer/mainState'
import { HashLink } from 'react-router-hash-link';

function Header() {
  // const dispatch = useDispatch()
  // const homeLink = useRef(0);
  // const productsLink = useRef(0);
  // const blogsLink = useRef(0);

  // const homeFun = () => {
  //   // dispatch(setHome(true))
  //   const home = homeLink.current
  //   home.className = 'active header_nav-link '
  //   productsLink.current.className = 'header_nav-link '
  //   blogsLink.current.className = 'header_nav-link '
  // }

  // const productsFun = () => {
  //   // dispatch(setHome(true))
  //   const products = productsLink.current
  //   products.className = 'active header_nav-link '
  //   homeLink.current.className = 'header_nav-link '
  //   blogsLink.current.className = 'header_nav-link '

  // }

  // const blogsFun = () => {
  //   // dispatch(setHome(false))
  //   const blogs = blogsLink.current
  //   blogs.className = 'active header_nav-link '
  //   homeLink.current.className = 'header_nav-link '
  //   productsLink.current.className = 'header_nav-link '
  // }
  const navigate = useNavigate()
  return (
    <div className='header'>
      <div className='header_logo'  onClick={() => navigate('/')}>
        <img src={logo} alt="skydevz_logo" />
        <p className='header_logo-title'>VAAN</p>
      </div>
      {/* Hamburger icon  */}
      <div>
        <input class="header_side-menu" type="checkbox" id="side-menu"/>
        <label class="header_hamb" for="side-menu"><span class="header_hamb-line"></span></label>
        {/* <div class="header_hamb-dropdown-content">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div> */}
        <nav className='header_nav'>
          <Link to="/"  className='header_nav-link active'>Home
            {/* <a ref={homeLink} onClick={homeFun} className='header_nav-link active'>
            Home </a> */}
               </Link>
          {/* <Link to="/" href='#home_Products' className='text-decoration'><a href='#home_Products' ref={productsLink} className='header_nav-link'> Products</a></Link> */}
          <HashLink smooth to="/#home_Products" className='header_nav-link'>Products
            {/* <a ref={productsLink} onClick={productsFun} className='header_nav-link' > 
            Products</a> */}
            </HashLink>
          {/* <Link to="/blog" className='text-decoration'><a href='#' ref={blogsLink} onClick={()=> blogsFun()} className='header_nav-link'> Blogs</a></Link> */}
        </nav>
        </div>
    </div>
  )
}

export default Header