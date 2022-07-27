
import React from 'react'

function Blog(props) {

    let date = props.blog.pubDate.slice(0,10);
    let blogDate = new Date(date).toDateString().slice(3);

  return (
    <>
        <div className='blogs_card' onClick={()=>{alert(JSON.stringify(props.blog))}}>
            <div className='blogs_card-view'>
                <img src={props.blog.thumbnail} className='blogs_card-img' alt='blogImage'></img>
                <div className='blogs_card-tags'>
                    {props.blog.categories.map((category)=>{
                      return(<button className='blogs_card-btn'>{category}</button>)
                    })}
                </div>
            </div>
            <h1 className='blogs_card-para'>{props.blog.title}</h1>
            <div className='blogs_card-Div'>
                <div className='blogs_card-Div_left'>
                    <img src="https://miro.medium.com/fit/c/96/96/1*KuorgxYnvKldSsfl-ejO_g.jpeg" className='blogs_card-Div_img' alt='blogImage'/>
                    <span className='blogs_card-Div_text'>written by {props.blog.author}</span>
                </div>
                <div className='blogs_card-Div_right'>
                    <p className='blogs_card-Div_date'>{blogDate}</p>
                    <span className='blogs_card-Div_line'></span>
                    <p className='blogs_card-Div_date'>3 mins read</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Blog