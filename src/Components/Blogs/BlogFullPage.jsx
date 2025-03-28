import React from 'react'
// import { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

function BlogFullPage() {
  const {id} = useParams()
  console.log(id);
  const blogs = useSelector(state => state.mainState.blogs);
  const data = blogs.find((e)=> e.title === id)
  console.log(data);
  // useEffect(()=>{},[]);

  return (
    <div>
      BlogFullPage
      <h1 className='blogsFull_title'>{data.title}
      </h1>
      <div className='blogs_card-Div_left'>
          <img src="https://miro.medium.com/fit/c/96/96/1*KuorgxYnvKldSsfl-ejO_g.jpeg" className='blogs_card-Div_img' alt='blogImage'/>
          <span className='blogs_card-Div_text'>written by {data.author}</span>
      </div> 
      </div>
  )
}

export default BlogFullPage