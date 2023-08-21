import React from 'react'
import data from '../../../article.json'
import Article from '../Article/Article'

const ArticleList = () => {
  return (
    <div className='mt-5 grid gap-y-5 gap-x-1 sm:mt-0 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl lg:max-w-[1200px] px-5 mx-auto'>
      {
        data.map((props, index) => <Article key={index} {...props} /> )
      }
    </div>
  )
}

export default ArticleList