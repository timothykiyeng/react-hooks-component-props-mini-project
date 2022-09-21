import Article from './Article'
import blogData from '../data/blog'

function ArticleList() {
  const posts = blogData.posts
  const article = posts.map((post) => 
  <Article
            key={post.id}
            title={post.title}
            date={post.date}
            preview={post.preview}
          />
  )
  return ( 
    <main>

  {article}
    </main>






    // <main>
    //   {props.posts.map((article) => {
    //     return (
    //       <Article
    //         key={article.id}
    //         title={article.title}
    //         date={article.date}
    //         preview={article.preview}
    //       />
    //     )
    //   })}
    // </main>
  )
}

export default ArticleList