import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import logo from "../assets/images/skydevz_icon2.svg"
import { setHome } from '../redux/reducer/mainState'

function Header() {
  const dispatch = useDispatch()
  const homeLink = useRef(0);
  const productsLink = useRef(0);
  const blogsLink = useRef(0);

  const homeFun = () => {
    dispatch(setHome(true))
    const home = homeLink.current
    home.className = 'active header_nav-link '
    productsLink.current.className = 'header_nav-link '
    blogsLink.current.className = 'header_nav-link '
  }

  const productsFun = () => {
    dispatch(setHome(true))
    const products = productsLink.current
    products.className = 'active header_nav-link '
    homeLink.current.className = 'header_nav-link '
    blogsLink.current.className = 'header_nav-link '
  }

  const blogsFun = () => {
    dispatch(setHome(false))
    const blogs = blogsLink.current
    blogs.className = 'active header_nav-link '
    homeLink.current.className = 'header_nav-link '
    productsLink.current.className = 'header_nav-link '
  }

  return (
    <div className='header'>
      <img src={logo} alt="trillo logo" className='header_logo'/>
      {/* Hamburger icon  */}
      <input class="header_side-menu" type="checkbox" id="side-menu"/>
      <label class="header_hamb" for="side-menu"><span class="header_hamb-line"></span></label>
      {/* <div class="header_hamb-dropdown-content">
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
      </div> */}
      <nav className='header_nav'>
        <a href='#' ref={homeLink} onClick={()=>{homeFun()}} className='header_nav-link active'> Home</a>
        <a href='#home_Products' ref={productsLink} onClick={()=>{productsFun()}} className='header_nav-link'> Products</a>
        <a href='#' ref={blogsLink} onClick={()=> blogsFun()} className='header_nav-link'> Blogs</a>
      </nav>
    </div>
  )
}

export default Header