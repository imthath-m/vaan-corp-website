import React, { useState } from 'react'
import Blog from './Blog'
import searchIcon from "../../assets/images/search_icon.svg"
import { useSelector } from 'react-redux';
import { Pagination, Stack } from '@mui/material';

function BlogsContainer() {
  const blogs = useSelector(state => state.mainState.blogs);
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
      setPage(value);
  };

  let firstFour;
  if(page === 1){
     firstFour = blogs.slice(0,4);
  } else if (page === 2) {
    firstFour = blogs.slice(4,8);
  } else if(page === 3) {
    firstFour = blogs.slice(8,12);
  }

  return (
    <>
      <div className='blogs-heading'>
          <h1 className='blogs-heading-h1'>Latest Blogs</h1>
          <div className='blogs_searchBar'>
            <input className='blogs_searchBar-input' placeholder='search blogs'></input>
            <img src={searchIcon} alt='search_icon' className='blogs_searchBar-icon'/>
            {/* <a className='blogs_searchBar-icon'><img src={searchIcon} alt='search_icon'/></a> */}
          </div>
      </div>
      <section className='blogsContainer'>
        {firstFour.map((blog)=> {
          return ( <Blog blog = {blog}/>)
        })}
      </section>
      <Stack spacing={4} alignItems="center" size = "large" style = {{fontSize: "60px"}}>
            {/* <Typography>Page: {page}</Typography> */}
            <Pagination count={3} page={page} onChange={handleChange} size = "large" style = {{fontSize: "60px"}}/>
        </Stack>
    </>
  )
}
export default BlogsContainer