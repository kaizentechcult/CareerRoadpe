import React from 'react'
import { Link } from 'react-router-dom'
const ArticleSection = ({ data }) => {
  // console.log(data) // You can keep this for debugging

  return (
    <div className="flex justify-center  flex-col">
      <h1 className='text-center text-5xl text-bold'>Article Page</h1>
        <ul className="flex flex-col gap-6 list-style-none md:grid md:grid-cols-2 w-full p-8 md:p-16">
      {data.map((articleData,index) => (
        <Link to={`${index}`} className="flex flex-col card-shadow bg-[#212020] border-[1px] border-white py-4 px-8 rounded-xl justify-center items-center w-full" key={articleData.id}>  {/* Add key for each article */}
          <h1 className='font-bold'>{articleData.title}</h1>
          <div className='w-full bg-white h-[0.1px]'> </div>
          <br/>
          <p>{articleData.content.slice(0,40)}...</p>
        </Link>
      ))}
      </ul>
    </div>
  )
}

export default ArticleSection
