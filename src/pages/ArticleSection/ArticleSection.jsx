import React from 'react'

const ArticleSection = (data) => {
  console.log(data)
  return (
    <div>
      <h1>{data.data[0].title}</h1>
    </div>
  )
}

export default ArticleSection
