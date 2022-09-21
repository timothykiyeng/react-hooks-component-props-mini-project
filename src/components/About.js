import blogData from "../data/blog";

// const image = "https://via.placeholder.com/215";
function About(){
	return (
	<aside>

		<img src ={blogData.image} alt="blog logo"></img>
		<p>{blogData.about}</p>

	</aside>
	)
}
export default About;