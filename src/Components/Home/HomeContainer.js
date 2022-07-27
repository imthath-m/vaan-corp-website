import React, { useEffect } from 'react'
import { getAllBlogs } from '../../helper'
import HomeContent from './HomeContent'
import HomeProducts from './HomeProducts'
import HomeTitle from './HomeTitle'

function HomeContainer() {

  useEffect(()=>{
    getAllBlogs();
  },[]);
  
  return (
    <div className='homeContainer'>
      <HomeTitle/>
      <HomeContent/>
      <HomeProducts/>
    </div>
  )
}

export default HomeContainer