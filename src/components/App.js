import React from "react";
import blogData from "../data/blog";
import Header from './Header.js'
import About from './About.js'
// import ArticleList from './ArticleList'

console.log(blogData);

function App() {
  // const posts = blogData.posts
  return (
   
    <div className="App">
      <Header />
      <About />
      {/* <ArticleList 
      key = {posts.id}
      title={posts.title}
      date = {posts.date}
      preview = {posts.preview}
      
      
      /> */}
    
    </div>
  );
}




export default App;
