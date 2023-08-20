import React from 'react'

const Article = ({ title, text, tags, image, alt }) => {
  return (
    <div className='mx-2 p-5 bg-gray-200 dark:bg-dark-200 dark:text-gray-200 rounded-xl shadow-lg'>
      <h3 className='text-xl text-purple-500 font-bold mb-2 dark:text-gray-200'>
        {title}
      </h3>

      <div className='flex gap-2 mb-3'>
        {
          tags.map(tag =>
            <span className='uppercase text-sm px-2 py-1 bg-purple-300 rounded-md font-bold text-white dark:text-gray-200' key={tag}>{tag}</span>
          )
        }
      </div>

      <div className='grid gap-1'>
        { text.map((content, index) =>
            <p key={index} className='dark:text-gray-400'>
              {content}
            </p>
        )}
      </div>

      <div className='mt-4'>
        {image && <img className='rounded-md' src={image} />}
        {image && alt && <span className='sr-only'>{alt}</span>}
      </div>
    </div>
  )
}

export default Article