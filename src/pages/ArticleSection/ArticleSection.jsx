import React from 'react'

const ArticleSection = ({ data }) => {
  // console.log(data) // You can keep this for debugging

  return (
    <div className="flex justify-center  flex-col">
      <h1 className='text-center'>Article Page</h1>
        <ul className="flex flex-col gap-6 list-style-none md:grid md:grid-cols-2 w-full p-8 md:p-16">
      {data.map((articleData) => (
        <article className="flex flex-col card-shadow bg-[#212020] py-4 px-8 rounded-xl justify-center items-center w-full" key={articleData.id}>  {/* Add key for each article */}
          <h1 className='font-bold'>{articleData.title}</h1>
          <div className='w-full bg-white h-[0.1px]'> </div>
          <br/>
          <p>{articleData.content.slice(0,40)}...</p>
        </article>
      ))}
      </ul>
    </div>
  )
}

export default ArticleSection
