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
//date
  let date = data.pubDate.slice(0,10);
  let blogDate = new Date(date).toDateString().slice(3);
  // useEffect(()=>{},[]);

  return (
    <div>
      BlogFullPage
      <div className='blogsFull_header'>
        <h1 className='blogsFull_title'>{data.title}</h1>
        <div className='blogsFull_header_author'>
            <img src="https://miro.medium.com/fit/c/96/96/1*KuorgxYnvKldSsfl-ejO_g.jpeg" className='blogs_card-Div_img' alt='blogImage'/>
            <span className='blogs_card-Div_text'>written by {data.author}</span>
        </div> 
        <div className='blogsFull_header_span'>
                      <p className='blogs_card-Div_date'>{blogDate}</p>
                      <span className='blogs_card-Div_line'></span>
                      <p className='blogs_card-Div_date'>3 mins read</p>
        </div>
      </div>
    </div>
  )
}

export default BlogFullPage