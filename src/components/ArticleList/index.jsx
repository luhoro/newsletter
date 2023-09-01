import data from '../../../article.json'
import Article from '../Article'

const ArticleList = () => {
  return (
    <div className='my-8 grid gap-5 sm:mt-0 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl lg:max-w-[1200px] px-5 mx-auto'>
      {
        data.map((props, index) => <Article key={index} {...props} /> )
      }
    </div>
  )
}

export default ArticleList