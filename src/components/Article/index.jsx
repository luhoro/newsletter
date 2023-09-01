const Article = ({ title, text, tags, image, alt }) => {
  return (
    <div className='flex flex-col justify-between w-full p-5 bg-gray-300 dark:bg-dark-200 dark:text-gray-200 rounded-xl shadow-lg transition-all hover:-translate-y-1'>
      <h3 className='text-xl text-purple-500 font-bold mb-2 dark:text-gray-200'>
        {title}
      </h3>

      <div className='flex flex-wrap gap-2 mb-3'>
        {
          tags.map(tag =>
            <span className='uppercase text-sm px-2 py-1 bg-purple-300 rounded-md font-bold text-white dark:text-gray-200 transition-all duration-300 hover:bg-purple-400 hover:bg-gradient-to-l dark:hover:from-slate-600 hover:from-slate-400 cursor-default' key={tag}>{tag}</span>
          )
        }
      </div>

      <div className='grid gap-5'>
        { text.map((content, index) =>
            <p key={index} className='dark:text-gray-400 line-clamp-6'>
              {content}
            </p>
        )}
      </div>

      <div className='mt-4 h-[200px] w-full'>
        {image && <img className='rounded-md object-cover h-full w-full' src={image} />}
        {image && alt && <span className='sr-only'>{alt}</span>}
      </div>
    </div>
  )
}

export default Article