import React from 'react'
import PropTypes from 'prop-types'
import { useParams } from "react-router-dom";
import articles from '../../assets/articles';

const Article = ({data}) => {
    const { id } = useParams();
    console.log(data)
  return (
    <div className='flex flex-col justify-center'>
      <h1 className='text-3xl text-center'>{data[id].title}</h1>
      <br/>
      <hr/>
      <br/>
      <div className='flex'>
      <h1 className='text-xl'>{data[id].content}</h1>
      <img className='h-40' src="/logoK.svg"/>
      </div>

    </div>
  )
}

Article.propTypes = {
  
}

export default Article
